export interface Post {
    id:string;
    title: string;
    author: string;
    publishedAt: string;
    content: string;
}

export interface CourseSummary {
    id:string;
    title:string;
    summary:string;
    instructor:string;
    price:number;
}

export interface Course {
    id:string;
    title:string;
    description:string;
    summary:string;
    instructor:string;
    instrcutorId:string;
    price:number;
    category: CourseCategory
}

export interface CourseCategory {
    id:string;
    name:string;
    slug:string;
    summary:string
}

export interface CoursePage {
    courses: CourseSummary[];
    totalElements:number;
    totalPages:number;
    currentPage:number;
    pageSize:number;
    hasNext:boolean;
    hasPrevious:boolean;
}