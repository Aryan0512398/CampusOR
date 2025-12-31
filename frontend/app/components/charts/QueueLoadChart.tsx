"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { queueLoadData } from "./mockData";
import ChartWrapper from "./ChartWrapper";

export default function QueueLoadChart() {
  return (
    <ChartWrapper
      title="Queue Load Throughout the Day"
      description="Displays how the number of active tokens changes across different time intervals."
    >
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={queueLoadData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="users"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 7 }}
            animationDuration={900}
            name="Active Tokens"
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}
