import { JsonPlaceholderClient } from "../client/JsonPlaceholderClient"

export class PostsController {

    constructor(JsonPlaceholderClient) {
        this.client = client
    }

   async getAllPosts(req, res) {
        const posts = await this.client.getPosts()
        res.json(posts)
    }

    async getPostById(req, res) {
        const id = parseInt(req.params.id)
        const post = await this.client.getPostById(id)
        res.json(post)
    }

    async createPost(req, res) {
        const postData = req.body
        const post = await this.client.createPost(postData)
        res.json(post)
    }

    async updatePost(req, res)  {
        const id = parseInt(req.params.id)
        const postData = req.body
        const post = await this.client.updatePost(id, postData)
        res.json(post)
    }

    async deletePost(req, res) {
        const id = parseInt(req.params.id)
        await this.client.deletePost(id)
        res.sendStatus(204)
    }
}

// import phg from "express";
// const { Express } = phg;
// const app = phg();
// const port = 3000;

//Hämta alla poster
// const post = fetch("https://jsonplaceholder.typicode.com/posts/") 
// .then((res) => res.json())
// .then((data)=>console.log(data))
// .catch((err)=>{
//     console.log("error occured", err)
// });

//Hämta alla användare
// fetch("https://jsonplaceholder.typicode.com/users/") 
// .then((res) => res.json())
// .then((data)=>console.log(data))
// .catch((err)=>{
//     console.log("error occured", err)
// });

//Hämta posten med ID 3
// fetch("https://jsonplaceholder.typicode.com/posts/3") 
// .then((res) => res.json())
// .then((data)=>console.log(data))
// .catch((err)=>{
//     console.log("error occured", err)
// });

//Hämta bilden med ID 59
// fetch("https://jsonplaceholder.typicode.com/photos/59") 
// .then((res) => res.json())
// .then((data)=>console.log(data))
// .catch((err)=>{
//     console.log("error occured", err)
// });

// //Skapa en användare
// fetch('https://jsonplaceholder.typicode.com/users', {
//   method: 'POST',
//   body: JSON.stringify({
//     id: '1',
//     name: 'hej',
//     username: "bert",
//     email: "natsta@g.com",
//     address: {
// street: "Kulas Light",
// suite: "Apt. 556",
// city: "Gwenborough",
// zipcode: "92998-3874",
// geo: {
// lat: "-37.3159",
// lng: "81.1496"
// }
// },
// phone: "1-770-736-8031 x56442",
// website: "hildegard.org",
// company: {
// name: "Romaguera-Crona",
// catchPhrase: "Multi-layered client-server neural-net",
// bs: "harness real-time e-markets"
// },
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// Skapa en post
// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'hejsan',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));


// //Uppdatera en post
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'PUT',
//   body: JSON.stringify({
//     id: 1,
//     title: 'hejsan hejsan',
//     body: 'boohoo',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json))