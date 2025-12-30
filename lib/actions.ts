"use server";

import { Octokit } from "octokit";
import { connectToDatabase } from "@/lib/db";
import { Leaderboard } from "@/models/Leaderboard";
import { auth } from "@/auth";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

// Helper function to fetch and calculate stats
async function getStats(username: string) {
  const { data: user } = await octokit.rest.users.getByUsername({ username });
  
  // Fetch repositories to sum stars
  const { data: repos } = await octokit.rest.repos.listForUser({ 
    username, 
    per_page: 100 
  });

  const stars = repos.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0);
  const totalScore = (stars * 10) + (user.followers * 5) + (user.public_repos * 2);

  return {
    username: user.login,
    name: user.name || user.login,
    avatar: user.avatar_url,
    followers: user.followers,
    repos: user.public_repos,
    stars: stars,
    score: totalScore,
  };
}

export async function battleAction(username1: string, username2: string) {
  try {
    const session = await auth();
    const [p1, p2] = await Promise.all([getStats(username1), getStats(username2)]);
    
    const winner = p1.score > p2.score ? p1 : p2;

    // Only save to DB if a session exists (Policy compliance)
    if (session) {
      await connectToDatabase();
      await Leaderboard.findOneAndUpdate(
        { username: winner.username },
        { 
          $set: { avatar: winner.avatar, score: winner.score },
          $inc: { battlesWon: 1 } 
        },
        { upsert: true, new: true }
      );
    }

    return { p1, p2, error: null };
  } catch (err: any) {
    console.error(err);
    return { p1: null, p2: null, error: "User not found or API error" };
  }
}

export async function getLeaderboard() {
  try {
    await connectToDatabase();
    return await Leaderboard.find().sort({ score: -1 }).limit(10).lean();
  } catch (err) {
    return [];
  }
}