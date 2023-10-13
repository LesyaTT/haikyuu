import axios from 'axios';

const apiClient = axios.create({
    baseURL: '/api', // Указываете базовый URL для API
    timeout: 10000, // Таймаут запроса
});

export default apiClient;
