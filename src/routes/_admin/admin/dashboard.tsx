import DashboardCards from '@/components/DashboardCards'
import { createFileRoute } from '@tanstack/react-router'
import DashboardOverview from "@/components/DashboardOverview.tsx";

export const Route = createFileRoute('/_admin/admin/dashboard')({
  component: DashboardComponent,
})

function DashboardComponent() {
  return (
      <div className="p-6 flex flex-col gap-6">
        <DashboardCards />
        <DashboardOverview />
      </div>
  );
}

