
////////////////////////////////////////////////
//////////////////  CATEGORY ///////////////////
////////////////////////////////////////////////

export interface Category {
    id:string;
    name:string;
    slug:string;
    summary:string
}

export interface CategoryRequest {
    name: string;
    summary: string;
}

////////////////////////////////////////////////
//////////////////  COURSE /////////////////////
////////////////////////////////////////////////
export interface CoursePageResponse {
    courses: CourseSummary[],
    totalElements: number,
    totalPages: number,
    currentPage: number,
    pageSize: number
    hasNext: boolean,
    hasPrevious: boolean,
}

export interface CourseSummary {
    id:string;
    title:string;
    summary:string;
    instructor:string;
    price:number;
}

export interface CourseResponse {
    id:string;
    title:string;
    description:string;
    instructor:string;
    summary:string;
    price:number;
    category:Category;
    instructorId:string;
}

export interface CourseRequest {
    title:string;
    description:string;
    summary:string;
    price:number;
    status:CourseStatus;
    categoryId:string;
}

enum CourseStatus {
    ACTIVE,INACTIVE
}