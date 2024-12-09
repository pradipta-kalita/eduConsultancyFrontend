import { createFileRoute } from '@tanstack/react-router'
import {useAuth} from "@/auth/authContext.tsx";

export const Route = createFileRoute('/_layout/_protected/profile/')({
  component: RouteComponent,
})

function RouteComponent() {
  const {user}=useAuth();
  return <div>{JSON.stringify(user)}</div>
}
