import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:8000'
});

// apiClient.interceptors.request.use(
//     (config) => {
//         const authStore = useAuthStore()
//         const token = authStore.token
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`
//         }
//         return config
//     },
//     (error) => {
//         return Promise.reject(error)
//     }
// )

export default apiClient