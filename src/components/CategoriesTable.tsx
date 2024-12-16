import React from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Link } from '@tanstack/react-router';
import { Edit, Trash2,FolderOpen } from 'lucide-react';
import PrimaryButton from "@/components/Buttons/PrimaryButton.tsx";

export interface Category {
    id: string;
    name: string;
    slug: string;
    summary: string;
}

interface CategoriesTableProps {
    categories: Category[];
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
}

const CategoriesTable: React.FC<CategoriesTableProps> = ({ categories, onEdit, onDelete }) => {
    return (
        <div className="bg-white pt-4 px-10 rounded-xl shadow-md border-gray-200 pb-16 mt-10">
            <div className="flex justify-between mb-6 mt-6">
                <h2 className="text-lg font-bold flex items-center space-x-2">
                    <FolderOpen className="w-5 h-5 text-purple-600"/>
                    <span>Categories</span>
                </h2>
                <PrimaryButton className={"hover:bg-purple-100 hover:text-purple-600 "}>
                    + New Category
                </PrimaryButton>
            </div>
            <div className="border rounded-lg overflow-hidden">
                <table className="table-auto w-full text-left border-collapse">
                    <thead className="bg-gray-100 text-gray-600">
                    <tr>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Slug</th>
                        <th className="px-4 py-2">Summary</th>
                        <th className="px-4 py-2 text-center">Courses</th>
                        <th className="px-4 py-2 text-right">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {categories.map((category) => (
                        <tr
                            key={category.id}
                            className="hover:bg-gray-50 transition-colors duration-200 border-b last:border-b-0"
                        >
                            <td className="px-4 py-2">{category.name}</td>
                            <td className="px-4 py-2">{category.slug}</td>
                            <td className="px-4 py-2">{category.summary}</td>
                            <td className="px-4 py-2 text-center">
                                <Link
                                    to={`/categories/${category.id}/courses`}
                                    target="_blank"
                                    className="text-purple-600 hover:text-purple-800 font-medium transition-colors duration-200"
                                >
                                    Go to Courses
                                </Link>
                            </td>
                            <td className="px-4 py-2 text-right">
                                <div className="flex justify-end items-center space-x-2">
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <button
                                                className="text-blue-600 hover:text-blue-800 p-1 rounded-md transition-all duration-200"
                                                aria-label="Edit category"
                                                onClick={() => onEdit(category.id)}
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
                                                aria-label="Delete category"
                                                onClick={() => onDelete(category.id)}
                                            >
                                                <Trash2 size={20}/>
                                            </button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            Delete
                                        </TooltipContent>
                                    </Tooltip>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CategoriesTable;
