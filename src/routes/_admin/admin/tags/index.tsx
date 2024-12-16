import { createFileRoute } from '@tanstack/react-router';
import TagsTable from "@/components/TagsTable.tsx";
import { Tag } from "@/types/blogTypes.ts";

export const Route = createFileRoute('/_admin/admin/tags/')({
  component: RouteComponent,
});

const tags: Tag[] = [
  { id: '1', tagName: 'Frontend', slug: 'frontend', summary: 'Posts related to frontend development' },
  { id: '2', tagName: 'Backend', slug: 'backend', summary: 'Posts related to backend development' },
  { id: '3', tagName: 'DevOps', slug: 'devops', summary: 'Posts related to DevOps and deployment' },
];

const handleEdit = (id: string) => {
  console.log('Edit tag with ID:', id);
};

const handleDelete = (id: string) => {
  console.log('Delete tag with ID:', id);
};

function RouteComponent() {
  return <>
    <TagsTable
        tags={tags}
        onEdit={handleEdit}
        onDelete={handleDelete}
    />
  </>
}
