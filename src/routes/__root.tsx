import * as React from 'react'
import {Outlet, createRootRouteWithContext} from '@tanstack/react-router'
import {QueryClient} from "@tanstack/react-query";

export const Route = createRootRouteWithContext<{
    queryClient: QueryClient;
}>()({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  )
}
