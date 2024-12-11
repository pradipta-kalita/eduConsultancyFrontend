import { createFileRoute, useRouter } from '@tanstack/react-router'

export const Route = createFileRoute('/_admin/admin/')({
  component: RouteComponent,
})

function RouteComponent() {
    const { navigate } = useRouter();
    navigate({to:'/admin/dashboard'})
    return <div>Something</div>
}
