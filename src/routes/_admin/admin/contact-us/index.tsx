import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_admin/admin/contact-us/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_admin/admin/contact-us/"!</div>
}
