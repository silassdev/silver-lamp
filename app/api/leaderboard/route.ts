import { NextResponse } from "next/server";
import { getLeaderboard } from "@/lib/actions";

export async function GET() {
    try {
        const leaderboard = await getLeaderboard();
        return NextResponse.json(leaderboard);
    } catch (error) {
        console.error("Leaderboard API error:", error);
        return NextResponse.json(
            { error: "Failed to fetch leaderboard" },
            { status: 500 }
        );
    }
}
