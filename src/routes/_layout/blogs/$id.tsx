import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/blogs/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams()
  return <div>Hello from blog {id}</div>
}
