import QueueLoadChart from "@/app/components/charts/QueueLoadChart";
import WaitTimeChart from "@/app/components/charts/WaitTimeChart";
import ServiceEfficiencyChart from "@/app/components/charts/ServiceEfficiencyChart";

export default function AdminPage() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">
        Admin Analytics Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <QueueLoadChart />
        <WaitTimeChart />
        <ServiceEfficiencyChart />
      </div>
    </div>
  );
}

