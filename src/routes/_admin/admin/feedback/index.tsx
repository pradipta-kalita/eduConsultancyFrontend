import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_admin/admin/feedback/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_admin/admin/feedbacks/"!</div>
}
