import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/blogs/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/blogs/"!</div>
}
