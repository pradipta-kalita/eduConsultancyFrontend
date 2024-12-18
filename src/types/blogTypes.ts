export interface BlogPageResponse {
    blogs: BlogSummary[],
    totalElements: number,
    totalPages: number,
    currentPage: number,
    pageSize: number
    hasNext: boolean,
    hasPrevious: boolean,
}

export interface BlogSummary {
    id: string;
    title: string;
    publishedAt: string;
    summary: string;
    author: string;
    authorId: string;
    status: string;
}

export interface BlogResponse {
    id:string;
    title: string;
    author: string;
    authorId: string;
    publishedAt: string;
    content: string;
}
export interface Tag {
    id: string;
    tagName: string;
    slug: string;
    summary: string;
}

export interface TagsPageResponse {
    tags: Tag[];
}