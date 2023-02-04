import axios from 'axios';

export const getPosts = async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    return res.data;
};

export const getUsers = async (id) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return res.data;
};
export const getCheck = async (id) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/todos`);
    return res.data;
};

export const getPost = async (id) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/${id}`);
    return res.data;
};
export const deletePost = async (id) => {
    const res = await axios.delete(`https://jsonplaceholder.typicode.com/${id}`);
    return res.status;
};
export const createPost = async (data) => {
    const res = await axios.post(`https://jsonplaceholder.typicode.com/`, data);
    return res.status;
};
