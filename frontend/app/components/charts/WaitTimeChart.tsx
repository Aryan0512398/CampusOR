"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { waitTimeData } from "./mockData";
import ChartWrapper from "./ChartWrapper";

export default function WaitTimeChart() {
  return (
    <ChartWrapper
      title="Average Waiting Time"
      description="Shows the average time users wait in different queues."
    >
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={waitTimeData}>
          <XAxis dataKey="queue" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="wait"
            fill="#16a34a"
            radius={[6, 6, 0, 0]}
            animationDuration={700}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}
