export class JsonPlaceholderClient {

    constructor() {
        this.baseUrl = 'https://jsonplaceholder.typicode.com';

    }

    async getPosts() {
        const response = await fetch.get(`${this.baseUrl}/posts`);
        return response.data;
    }

     async getPostById(id) {
        const response = await fetch.get(`${this.baseUrl}/posts/${id}`);
        return response.data;
    }

     async createPost(postData) {
        const response = await fetch.post(`${this.baseUrl}/posts`, postData);
        return response.data;
    }

     async updatePost(id, postData) {
        const response = await fetch.put(`${this.baseUrl}/posts/${id}`, postData);
        return response.data;
    }

     async deletePost(id) {
        await fetch.delete(`${this.baseUrl}/posts/${id}`);
    }

     async getUsers() {
        const response = await fetch.get(`${this.baseUrl}/users`);
        console.log(response.data)
        return response.data;
    }

     async getUserById(id) {
        const response = await fetch.get(`${this.baseUrl}/users/${id}`);
        return response.data;
    }

     async createUser(userData) {
        const response = await fetch.post(`${this.baseUrl}/users`, userData);
        return response.data;
    }

    async updateUser(id, userData) {
        const response  = await fetch.put(`${this.baseUrl}/users/${id}`, userData);
        return response.data;
    }

   async deleteUser(id) {
        await fetch.delete(`${this.baseUrl}/users/${id}`);
    }
}