import axios from "axios";

const BASE_URL = 'https://jsonplaceholder.typicode.com'

const JSONPlaceholder = axios.create({
    withCredentials: true,
    baseURL: BASE_URL
})

export const HomeAPI = {
    getUsers: async (pagePortion) => {
        return await JSONPlaceholder.get(`/users/${pagePortion}`)
    },
    getPosts: async (id) => {
        return await JSONPlaceholder.get(`/posts?userId=${id}`)
    },
    getPhotos: async (id) => {
        return await JSONPlaceholder.get(`/photos?albumId=${id}`)
    }
}


