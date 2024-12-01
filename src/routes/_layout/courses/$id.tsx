import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/courses/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams()
  return <div>Hello from course {id}</div>
}
