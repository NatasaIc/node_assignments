import { JsonPlaceholderClient } from "../client/JsonPlaceholderClient";

export class UsersController {
   
    constructor(JsonPlaceholderClient) {
        this.client = client;
    }

   async getAllUsers(req, res) {
        console.log(this.client)
        const users = await this.client.getUsers();
        res.json(users);
    }

   async getUserById(req, res) {
        const id = parseInt(req.params.id);
        const user = await this.client.getUserById(id);
        res.json(user);
    }

   async createUser(req, res) {
        const userData = req.body;
        const user = await this.client.createUser(userData);
        res.json(user);
    }

   async updateUser(req, res) {
        const id = parseInt(req.params.id);
        const userData = req.body;
        const user = await this.client.updateUser(id, userData);
        res.json(user);
    }

   async deleteUser(req, res) {
        const id = parseInt(req.params.id);
        await this.client.deleteUser(id);
        res.sendStatus(204);
    }
}