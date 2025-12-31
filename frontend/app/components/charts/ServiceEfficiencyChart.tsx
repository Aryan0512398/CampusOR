"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { serviceEfficiencyData } from "./mockData";
import ChartWrapper from "./ChartWrapper";

const COLORS = ["#22c55e", "#ef4444"];

export default function ServiceEfficiencyChart() {
  return (
    <ChartWrapper
      title="Service Efficiency"
      description="Compares successfully served tokens with delayed ones."
    >
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={serviceEfficiencyData}
            dataKey="value"
            nameKey="name"
            outerRadius={95}
            innerRadius={50}
            paddingAngle={4}
            animationDuration={800}
            label={({ name, percent }) =>
              `${name}: ${percent ? (percent * 100).toFixed(0) : 0}%`
            }
          >
            {serviceEfficiencyData.map((_, i) => (
              <Cell key={i} fill={COLORS[i]} />
            ))}
          </Pie>

          <Tooltip />
          <Legend verticalAlign="bottom" iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}
