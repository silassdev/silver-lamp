export default function LeaderboardList({ players }: { players: any[] }) {
  return (
    <div className="mt-12 bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
      <div className="bg-slate-900 p-4">
        <h2 className="text-white font-bold text-center">Global Leaderboard</h2>
      </div>
      <ul className="divide-y divide-slate-100">
        {players.map((player, index) => (
          <li key={player.username} className="p-4 flex justify-between items-center hover:bg-slate-50">
            <div className="flex items-center gap-4">
              <span className="font-bold text-slate-400 w-4">#{index + 1}</span>
              <img src={player.avatar} className="w-10 h-10 rounded-full" alt="" />
              <span className="font-semibold text-slate-700">{player.username}</span>
            </div>
            <div className="text-right">
              <p className="font-black text-blue-600">{player.score} pts</p>
              <p className="text-xs text-slate-400">{player.battlesWon} wins</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}