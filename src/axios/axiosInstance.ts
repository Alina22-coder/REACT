import axios from "axios"

const axiosInstance = axios.create({
    baseURL: 'http://185.69.152.209/carsAPI/v1',
    headers: {'Content-Type': 'application/json'},
})

export default axiosInstance;