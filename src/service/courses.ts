import axios from "@/utils/axiosInstance";
import { Course, CoursePage } from "./types";

/// TO FETCH SIGNLE COURSE USING COURSE ID
export const courseQueryOptions = (courseId: string): { queryKey: string[]; queryFn: () => Promise<Course> } => ({
    queryKey: ['courses', courseId],
    queryFn: async () => {
        const response = await axios.get(`/courses/${courseId}`);
        if (!response.data) {
            throw new Error(`Post with ID ${courseId} not found`);
        }
        return response.data;
    },
});


/// I DON"T THINK I WILL BE ABLE TO USE THIS
export const coursesPageQueryOptions = (): { queryKey: string[]; queryFn: () => Promise<CoursePage> } => ({
    queryKey: ['courses'],
    queryFn: async () => {
        const response = await axios.get(`/courses`);
        if (!response.data) {
            throw new Error(`Courses not found`);
        }
        return response.data;
    },
});

export const fetchCoursesPage = async (
    page: number,
    size: number,
    order: string,
    sort: string
  ): Promise<CoursePage> => {
    const response = await axios.get(`/courses`, {
      params: {
        page: page - 1, // page starts from 0, so subtract 1
        size,
        order,
        sortBy: sort,
      },
    });
  
    return response.data; // Only return the data part
  };
  