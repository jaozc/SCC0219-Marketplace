import express from 'express';

export class MainRoute {

    constructor() {
        this.router = express.Router();

        this.router.get('/', (_, res) => {
            res.status(200).send({ title: "My API", version: "0.1" });
        });
    }

    getRouter() { return this.router; }
}