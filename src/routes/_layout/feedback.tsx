import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/feedback')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/feedback"!</div>
}
