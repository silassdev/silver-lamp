"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

interface ChartProps {
  dataP1: any;
  dataP2: any;
}

export default function BattleChart({ dataP1, dataP2 }: ChartProps) {
  // Format data for Recharts
  const data = [
    { subject: "Stars", A: dataP1.stars, B: dataP2.stars, fullMark: 150 },
    { subject: "Followers", A: dataP1.followers, B: dataP2.followers, fullMark: 150 },
    { subject: "Repos", A: dataP1.repos, B: dataP2.repos, fullMark: 150 },
    { subject: "Score / 10", A: dataP1.score / 10, B: dataP2.score / 10, fullMark: 150 },
  ];

  return (
    <div className="w-full h-[400px] bg-white p-4 rounded-3xl shadow-inner border border-slate-100">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar
            name={dataP1.name}
            dataKey="A"
            stroke="#2563eb"
            fill="#2563eb"
            fillOpacity={0.6}
          />
          <Radar
            name={dataP2.name}
            dataKey="B"
            stroke="#db2777"
            fill="#db2777"
            fillOpacity={0.6}
          />
          <Tooltip />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}