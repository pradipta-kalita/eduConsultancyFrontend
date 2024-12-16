import { createFileRoute } from '@tanstack/react-router'
import BlogDashboardCards from "@/components/BlogDashboardCards.tsx";
import BlogList from "@/components/BlogList.tsx";
import {BlogSummary} from "@/types/blogTypes.ts";

export const Route = createFileRoute('/_admin/admin/blogs/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>
    <BlogDashboardCards/>
    <BlogList blogs={demoBlogs} />
  </>
}

const demoBlogs: BlogSummary[] = [
  {
    id: "1",
    title: "How to Learn React Effectively",
    publishedAt: "2024-12-10T10:00:00Z",
    summary: "A comprehensive guide to mastering React for beginners and experienced developers.",
    author: "Jane Doe",
    authorId: "123",
    status: "Published",
  },
  {
    id: "2",
    title: "Understanding TypeScript Basics",
    publishedAt: "2024-12-08T15:30:00Z",
    summary: "Learn the fundamentals of TypeScript and how it can improve your JavaScript projects.",
    author: "John Smith",
    authorId: "124",
    status: "Draft",
  },
  {
    id: "3",
    title: "Top 10 JavaScript Frameworks in 2024",
    publishedAt: "2024-12-01T08:00:00Z",
    summary: "An analysis of the most popular JavaScript frameworks and their use cases.",
    author: "Alice Johnson",
    authorId: "125",
    status: "Archived",
  },
  {
    id: "4",
    title: "Optimizing Web Performance",
    publishedAt: "2024-11-25T12:45:00Z",
    summary: "Tips and techniques to make your website faster and improve user experience.",
    author: "David Brown",
    authorId: "126",
    status: "Published",
  },
  {
    id: "5",
    title: "CSS Grid vs. Flexbox: When to Use Which?",
    publishedAt: "2024-11-20T09:20:00Z",
    summary: "A comparison of CSS Grid and Flexbox with examples and use cases.",
    author: "Emily Davis",
    authorId: "127",
    status: "Draft",
  },
  {
    id: "6",
    title: "Getting Started with Next.js",
    publishedAt: "2024-11-15T14:10:00Z",
    summary: "An introduction to Next.js, its features, and how to build your first app.",
    author: "Chris Wilson",
    authorId: "128",
    status: "Published",
  },
  {
    id: "7",
    title: "Demystifying Redux Toolkit",
    publishedAt: "2024-11-10T11:00:00Z",
    summary: "A beginner-friendly explanation of Redux Toolkit and how it simplifies state management.",
    author: "Sophia Martinez",
    authorId: "129",
    status: "Archived",
  },
  {
    id: "8",
    title: "Best Practices for REST API Design",
    publishedAt: "2024-11-05T17:30:00Z",
    summary: "Learn how to design clean, scalable, and efficient REST APIs.",
    author: "Michael Lee",
    authorId: "130",
    status: "Published",
  },
];

