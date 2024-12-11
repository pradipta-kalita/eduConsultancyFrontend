import { useAuth } from '@/auth/authContext';
import AppSidebar from '@/components/AppSidebar';
import { SidebarTrigger } from '@/components/SidebarTrigger';
import { SidebarProvider } from '@/components/ui/sidebar';
import { createFileRoute, Outlet, useRouter } from '@tanstack/react-router';
import { useEffect, useState } from 'react';

export const Route = createFileRoute('/_admin')({
  component: RouteComponent,
});

function RouteComponent() {
  const { user, refreshToken } = useAuth();
  const [loading, setLoading] = useState(true);
  const { navigate } = useRouter();

  useEffect(() => {
    const handleAuth = async () => {
      if (!user) {
        try {
          await refreshToken(); // Attempt to refresh token for unauthenticated users
        } catch (error) {
          console.log("Error refreshing token:", error);
        }
      }

      setLoading(false); // Update loading state once the check is complete
    };

    if (loading) {
      handleAuth();
    }

    // Only navigate after loading is complete
    if (!loading) {
      // if (!user) {
      //   navigate({ to: '/auth/login' });
      // } else if (user.role !== 'ADMIN') {
      //   navigate({ to: '/profile' });
      // }
    }
  }, [user, loading, refreshToken, navigate]); // Add necessary dependencies to avoid infinite loops

  // Show loading state while checking user authentication status
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen ">
        <AppSidebar />

        {/* Main content area */}
        <div className="flex-1 p-4">
          {/* Sidebar toggle button */}
          <SidebarTrigger />
          {/* Child routes will be rendered here */}
          <Outlet />
        </div>

      </div>
    </SidebarProvider>
  );
}
