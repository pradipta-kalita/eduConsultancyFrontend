import { createFileRoute } from '@tanstack/react-router'
import CoursesDashboard from "@/components/CoursesDashboard.tsx";
import CoursesList from "@/components/CoursesList.tsx";

export const Route = createFileRoute('/_admin/admin/courses/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>
    <CoursesDashboard/>
    <CoursesList/>
  </>
}
