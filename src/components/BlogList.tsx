import React, { useState } from "react";
import { Edit, Eye, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils.ts"; // Utility function for conditional classnames
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import PrimaryButton from "@/components/Buttons/PrimaryButton.tsx";

type FilterType = "All" | "Published" | "Draft" | "Archived";

interface BlogSummary {
    id: string;
    title: string;
    publishedAt: string;
    summary: string;
    author: string;
    status: string;
}


interface BlogListProps {
    blogs: BlogSummary[];
}

const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [activeFilter, setActiveFilter] = useState<FilterType>("All");
    const itemsPerPage = 6;

    const filteredBlogs = blogs.filter((blog) =>
        activeFilter === "All" || blog.status === activeFilter
    );

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentBlogs = filteredBlogs.slice(startIndex, startIndex + itemsPerPage);
    const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);

    return (
        <div className="bg-white pt-4 px-10 rounded-xl shadow-md border-gray-200">
            {/* Header Section */}
            <div className="mb-6 flex justify-between items-center">
                {/* Filters */}
                <div className="flex gap-4">
                    {["All", "Published", "Draft", "Archived"].map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter as FilterType)}
                            className={cn(
                                "px-4 py-2 rounded-lg text-sm transition-colors duration-300",
                                activeFilter === filter
                                    ? "bg-purple-100 text-purple-600"
                                    : "text-gray-500 hover:text-gray-900"
                            )}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
                {/* "+ New Blog" Button */}
                <PrimaryButton className="hover:bg-purple-100 hover:text-purple-600 ">
                    + New Blog
                </PrimaryButton>
            </div>

            {/* Table Section */}
            <div className="border rounded-lg overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-white text-gray-600">
                            <TableHead>Title</TableHead>
                            <TableHead>Author</TableHead>
                            <TableHead>Published Date</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {currentBlogs.map((blog) => (
                            <TableRow
                                key={blog.id}
                                className="hover:bg-gray-50 transition-colors duration-200 border-b last:border-b-0"
                            >
                                <TableCell>{blog.title}</TableCell>
                                <TableCell>{blog.author}</TableCell>
                                <TableCell>{new Date(blog.publishedAt).toLocaleDateString()}</TableCell>
                                <TableCell>
                                    <span
                                        className={cn(
                                            "inline-block px-2 py-1 rounded-md text-sm",
                                            blog.status === "Published"
                                                ? "bg-green-100 text-green-600"
                                                : blog.status === "Draft"
                                                    ? "bg-yellow-100 text-yellow-600"
                                                    : "bg-gray-100 text-gray-600"
                                        )}
                                    >
                                        {blog.status}
                                    </span>
                                </TableCell>
                                <TableCell className="text-right">
                                    <div className="flex justify-end items-center space-x-2">
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <button
                                                    className="text-blue-600 hover:text-blue-800 p-1 rounded-md transition-all duration-200"
                                                    aria-label="View blog"
                                                >
                                                    <Eye size={20} />
                                                </button>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                View
                                            </TooltipContent>
                                        </Tooltip>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <button
                                                    className="text-blue-600 hover:text-blue-800 p-1 rounded-md transition-all duration-200"
                                                    aria-label="Edit blog"
                                                >
                                                    <Edit size={20} />
                                                </button>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                Edit
                                            </TooltipContent>
                                        </Tooltip>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <button
                                                    className="text-red-600 hover:text-red-800 p-1 rounded-md transition-all duration-200"
                                                    aria-label="Delete blog"
                                                >
                                                    <Trash2 size={20} />
                                                </button>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                Delete
                                            </TooltipContent>
                                        </Tooltip>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            {/* Pagination */}
            <div className="mt-6 p-4">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                href="#"
                                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                            />
                        </PaginationItem>
                        {[...Array(totalPages)].map((_, index) => (
                            <PaginationItem key={index}>
                                <PaginationLink
                                    href="#"
                                    onClick={() => setCurrentPage(index + 1)}
                                    isActive={currentPage === index + 1}
                                    className="px-3 py-1 rounded-md transition-colors duration-200 hover:bg-gray-200"
                                >
                                    {index + 1}
                                </PaginationLink>
                            </PaginationItem>
                        ))}
                        <PaginationItem>
                            <PaginationNext
                                href="#"
                                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
};

export default BlogList;
