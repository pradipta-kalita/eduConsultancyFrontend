import {axiosInstance} from "@/utils/axiosInstance.tsx";
import {AxiosError} from "axios";

export const fetchBlogs = async (page: number) => {
    try {
        const response = await axiosInstance.get(`/blogs?page=${page}`);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            // Handle Axios-specific error
            throw new Error(error.response?.data?.message || "Failed to fetch blogs");
        }
        throw new Error("An unknown error occurred");
    }
};


export const fetchBlog = (blogId:string) => {
    return axiosInstance.get(`/blogs/${blogId}`);
}