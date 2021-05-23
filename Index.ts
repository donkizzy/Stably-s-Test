import cors from "cors";
import express, { json, NextFunction, Request, Response } from "express";
import path from 'path';

// Initialize express app
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(json());

app.get("/", (req: Request, res: Response): void => {
    //TODO : Serve html page here
});

app.use("*", (req: Request, res: Response): void => {
    ``
    res.status(404).send('please check your route');
});

app.listen(PORT, async (): Promise<void> =>
    console.log(`Server listening on port ${PORT}!`)
)