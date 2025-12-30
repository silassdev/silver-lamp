import { Octokit } from "octokit";

// Initialize Octokit (use a personal token in env for higher rate limits)
const octokit = new Octokit({ auth: process.env.GITHUB_ACCESS_TOKEN });

interface ProfileStats {
  username: string;
  followers: number;
  publicRepos: number;
  totalStars: number; // You have to loop through repos to sum this
  score: number;
}

export async function getProfileStats(username: string): Promise<ProfileStats> {
  const { data: user } = await octokit.rest.users.getByUsername({ username });
  const { data: repos } = await octokit.rest.repos.listForUser({ username, per_page: 100 });

  const totalStars = repos.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0);
  
  // Weighted Algorithm
  // Stars are worth 5x, Followers 3x, Repos 1x
  const score = (totalStars * 5) + (user.followers * 3) + (user.public_repos * 1);

  return {
    username: user.login,
    followers: user.followers,
    publicRepos: user.public_repos,
    totalStars,
    score
  };
}