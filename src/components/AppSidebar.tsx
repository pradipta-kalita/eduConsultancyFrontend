import { 
  Sidebar,
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarHeader,
  SidebarFooter ,
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem, 
  useSidebar } from "./ui/sidebar";
  import { Home, Inbox, Calendar, Search, Settings, LogOut,SquarePen,Tag,GraduationCap,Folder, MessageCircle, Phone,School2, UserCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";
import { useAuth } from "@/auth/authContext";


const sidebarData = [
  {
    label: "Contents",
    items: [
      { to: "/admin/dashboard", icon: Home, label: "Home" },
      { to: "/admin/inbox", icon: Inbox, label: "Inbox" },
      { to: "/admin/calendar", icon: Calendar, label: "Calendar" },
      { to: "/admin/search", icon: Search, label: "Search" },
      { to: "/admin/settings", icon: Settings, label: "Settings" },
    ],
  },
  {
    label: "Blogs",
    items: [
      { to: "/admin/blogs", icon: SquarePen, label: "Posts" },
      { to: "/admin/tags", icon: Tag, label: "Tags" },
    ],
  },
  {
    label: "Courses",
    items: [
      { to: "/admin/courses", icon: GraduationCap, label: "Courses" },
      { to: "/admin/categories", icon: Folder, label: "Categories" },
    ],
  },
  {
    label: "User Insights",
    items: [
      { to: "/admin/feedback", icon: MessageCircle, label: "Feedbacks" }, // Feedback details
      { to: "/admin/contact-us", icon: Phone, label: "Contact Us" }, // Contact us details
    ],
  },
];

export default function AppSidebar() {
  const {logout} = useAuth();
  const { open } = useSidebar();

  return (
    <Sidebar className={`fixed top-0 left-0 h-screen shadow-lg bg-gray-900 text-black transition-transform ${
      open ? "translate-x-0" : "-translate-x-full"
    } sm:translate-x-0 sm:w-64 w-64`}>
      {/* Sidebar Header */}
      <SidebarHeader className="p-4 flex items-center justify-between">
      <h1 className="text-xl text-gray-800 font-bold flex items-center space-x-2">
        <span className="inline-block align-middle">
          <School2 className="h-4 w-4" /></span>
        <span>EduConsultancy</span>
      </h1>

        {/* Optional collapsible toggle button */}
        <button
          className="text-gray-400 hover:text-white"
          aria-label="Toggle Sidebar"
        >
          {/* Add a toggle icon here */}
        </button>
      </SidebarHeader>

      {/* Sidebar Content */}
      <SidebarContent className="flex-1 overflow-y-auto">
        {
          sidebarData.map(group=>{
            return (
              <SidebarGroup >
                <SidebarGroupLabel className="px-4 py-2 text-gray-500 text-sm">
                      {group.label}
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {group.items.map((route) => (
                      <SidebarMenuItem key={route.to}>
                        <SidebarMenuButton
                          asChild
                          className="flex items-center text-base font-medium gap-3 text-gray-800 bg-transparent hover:bg-gray-200 hover:text-gray-900 p-2 rounded-md transition-all duration-300 ease-in-out"
                        >
                          <Link
                            to={route.to}
                            activeProps={{
                              className: "bg-gray-100 font-bold",
                            }}
                            className="flex items-center space-x-2 p-5 rounded"
                          >
                            <route.icon className="h-5 w-5" />
                            <span>{route.label}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            )
          })
        }
      </SidebarContent>

      {/* Sidebar Footer */}
      <SidebarFooter className="sticky">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="flex items-center hover:bg-gray-100 gap-3">
              <Button onClick={logout} variant={'ghost'} className="p-5 text-gray-800 text-md border border-gray-300">
                <LogOut className="h-4 w-4"/>
                Sign out
              </Button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
