import { createFileRoute } from '@tanstack/react-router'
import CoursesDashboard from "@/components/CoursesDashboard.tsx";
import CoursesList from "@/components/CoursesList.tsx";

export const Route = createFileRoute('/_admin/admin/courses/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className="p-6 flex flex-col gap-6">
    <CoursesDashboard/>
    <CoursesList/>
  </div>
}
