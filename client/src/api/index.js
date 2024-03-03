import axios from 'axios';

const axiosInstance = axios.create({ baseURL: 'http://localhost:5000/api' });

export const getPhones = () => axiosInstance.get('/phones');
export const createPhone = data => axiosInstance.post('/phones', data);
export const phoneDelete = id => axiosInstance.delete(`/phones/${id}`); 