import React, { useState } from "react"
import { Edit, Trash2 } from 'lucide-react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { cn } from "@/lib/utils"

interface CourseSummary {
    title: string
    instructor: string
    price: number
    published_at: string
    status: "Active" | "Inactive"
}

const courses: CourseSummary[] = [
    { title: "React for Beginners", instructor: "John Doe", price: 99, published_at: "2024-01-01", status: "Active" },
    { title: "Advanced CSS", instructor: "Jane Smith", price: 120, published_at: "2024-02-15", status: "Active" },
    { title: "JavaScript Essentials", instructor: "Alice Brown", price: 80, published_at: "2024-03-10", status: "Inactive" },
    { title: "Node.js Mastery", instructor: "David Lee", price: 110, published_at: "2024-03-01", status: "Active" },
    { title: "Python for Data Science", instructor: "Eva White", price: 130, published_at: "2024-02-20", status: "Active" },
    { title: "Full Stack Web Development", instructor: "Mike Green", price: 150, published_at: "2024-01-25", status: "Inactive" },
    { title: "TypeScript for Professionals", instructor: "Sara Black", price: 100, published_at: "2024-03-05", status: "Active" },
    { title: "React Native Development", instructor: "Tom Clark", price: 95, published_at: "2024-03-15", status: "Active" },
    { title: "Angular Crash Course", instructor: "Olivia Scott", price: 110, published_at: "2024-02-28", status: "Inactive" },
    { title: "Introduction to AI", instructor: "Liam King", price: 140, published_at: "2024-01-10", status: "Active" },
    { title: "Machine Learning with Python", instructor: "Grace Allen", price: 160, published_at: "2024-01-18", status: "Active" },
    { title: "Blockchain Fundamentals", instructor: "Jacob White", price: 180, published_at: "2024-02-10", status: "Inactive" },
]

type FilterType = "All" | "Monthly" | "Weekly" | "Today"

const CoursesList: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [activeFilter, setActiveFilter] = useState<FilterType>("All")
    const itemsPerPage = 6

    const filteredCourses = courses // Apply actual filtering logic here based on activeFilter

    const startIndex = (currentPage - 1) * itemsPerPage
    const currentCourses = filteredCourses.slice(startIndex, startIndex + itemsPerPage)
    const totalPages = Math.ceil(filteredCourses.length / itemsPerPage)

    return (
        <div className="bg-white p-4 rounded-xl shadow-md border-gray-200">
            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Course List</h2>
                <div className="flex gap-4">
                    {["All", "Monthly", "Weekly", "Today"].map((filter) => (
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
            </div>
            <div className="border rounded-lg overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-white text-gray-600">
                            <TableHead>Title</TableHead>
                            <TableHead>Instructor</TableHead>
                            <TableHead>Published Date</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Price</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {currentCourses.map((course, index) => (
                            <TableRow
                                key={index}
                                className="hover:bg-gray-50 transition-colors duration-200 border-b last:border-b-0"
                            >
                                <TableCell>{course.title}</TableCell>
                                <TableCell>{course.instructor}</TableCell>
                                <TableCell>{course.published_at}</TableCell>
                                <TableCell>
                                    <span
                                        className={cn(
                                            "inline-block px-2 py-1 rounded-md text-sm",
                                            course.status === "Active"
                                                ? "bg-green-100 text-green-600"
                                                : "bg-yellow-100 text-yellow-600"
                                        )}
                                    >
                                        {course.status}
                                    </span>
                                </TableCell>
                                <TableCell className="text-right">
                                    ${course.price.toFixed(2)}
                                </TableCell>
                                <TableCell className="text-right">
                                    <div className="flex justify-end items-center space-x-2">
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <button
                                                    className="text-blue-600 hover:text-blue-800 p-1 rounded-md transition-all duration-200"
                                                    aria-label="Edit course"
                                                >
                                                    <Edit size={20}/>
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
                                                    aria-label="Delete course"
                                                >
                                                    <Trash2 size={20}/>
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
            <div className="mt-6">
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
    )
}

export default CoursesList
