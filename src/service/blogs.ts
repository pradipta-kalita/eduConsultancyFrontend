import axios from "@/utils/axiosInstance";
import axiosLib, {AxiosError} from "axios";
import {Post} from "@/service/types";
export const fetchBlogs = async (page: number) => {

    try {
        const response = await axios.get(`/blogs?page=${page}&order=desc`);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            // Handle Axios-specific error
            throw new Error(error.response?.data?.message || "Failed to fetch blogs");
        }
        throw new Error("An unknown error occurred");
    }
};

export const blogQueryOptions = (blogId: string): { queryKey: string[]; queryFn: () => Promise<Post> } => ({
    queryKey: ['blogs', blogId],
    queryFn: async () => {
        const response = await axios.get(`/blogs/${blogId}`);
        if (!response.data) {
            throw new Error(`Post with ID ${blogId} not found`);
        }
        return response.data;
    },
});

export const fetchBlog:(blogId: string) => Promise<axiosLib.AxiosResponse<Post>> = (blogId:string) => {
    return axios.get(`/blogs/${blogId}`);
}