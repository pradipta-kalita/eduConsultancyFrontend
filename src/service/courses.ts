import axios from "@/utils/axiosInstance";
import { CourseResponse, CoursePageResponse} from "@/types/courseTypes.ts";

/// TO FETCH SINGLE COURSE USING COURSE ID
export const courseQueryOptions = (courseId: string): { queryKey: string[]; queryFn: () => Promise<CourseResponse> } => ({
    queryKey: ['courses', courseId],
    queryFn: async () => {
        const response = await axios.get(`/courses/${courseId}`);
        if (!response.data) {
            throw new Error(`Post with ID ${courseId} not found`);
        }
        return response.data;
    },
});


export const fetchCoursesPage = async (
    page: number,
    size: number,
    order: string,
    sort: string
  ): Promise<CoursePageResponse> => {
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
  