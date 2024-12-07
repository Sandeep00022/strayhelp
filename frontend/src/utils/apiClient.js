import axios from "axios";

const apiClient = axios.create({
  baseURL:import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api/v1",
  timeout: 10000, // Timeout in milliseconds
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken"); // Replace with your token logic
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized errors (e.g., redirect to login)
      console.error("Unauthorized! Redirecting to login...");
      // window.location.href = "/login"; // Uncomment if needed
    }
    return Promise.reject(error);
  }
);

export default apiClient;
