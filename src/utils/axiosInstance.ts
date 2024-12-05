import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080', // Base URL for your API
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401) {
            try {
                // Attempt token refresh
                await axios.post('http://localhost:8080/auth/refresh-token', {}, { withCredentials: true });
                // Retry the original request
                return axiosInstance.request(error.config);
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (refreshError) {
                // Redirect to login if refresh fails
                window.location.href = '/auth/login';
            }
        }
        return Promise.reject(error);
    }
);
export default axiosInstance;
