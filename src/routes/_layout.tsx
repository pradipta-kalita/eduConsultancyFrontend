import {createFileRoute, Outlet} from '@tanstack/react-router'
import Navbar from "../components/Navbar.tsx";

export const Route = createFileRoute('/_layout')({
  component: RouteComponent,
})

function RouteComponent() {
  return (<>
        <Navbar/>
        <Outlet/>
    </>)
}
