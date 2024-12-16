import { createFileRoute } from '@tanstack/react-router'
import CategoriesTable from "@/components/CategoriesTable.tsx";
import {Category} from "@/types/courseTypes.ts";

export const Route = createFileRoute('/_admin/admin/categories/')({
  component: RouteComponent,
})

const categories: Category[] = [
  { id: '1', name: 'Frontend', slug: 'frontend', summary: 'Courses about frontend development' },
  { id: '2', name: 'Backend', slug: 'backend', summary: 'Courses about backend development' },
  { id: '3', name: 'DevOps', slug: 'devops', summary: 'Courses about DevOps and deployment' },
];

const handleEdit = (id: string) => {
  console.log('Edit category with ID:', id);
};

const handleDelete = (id: string) => {
  console.log('Delete category with ID:', id);
};

function RouteComponent() {
  return <>
    <CategoriesTable
        categories={categories}
        onEdit={handleEdit}
        onDelete={handleDelete}
    />
  </>
}
