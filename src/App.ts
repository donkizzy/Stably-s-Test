import cors from "cors";
import express, { json, Request, Response } from "express";
import path from 'path';
import { highestPrimeNumber } from "./utils/HighestPrimeNumber";

// Initialize express app
const app = express();

app.use(cors());
app.use(json());
app.use(express.static(path.join(__dirname, '../src/public')));
app.get("/", (req: Request, res: Response): void => {
    res.status(200).sendFile(path.join(__dirname, './views', 'Index.html'));
});
app.post('/', (req: Request, res: Response): void => {
    var primeNumber = highestPrimeNumber(Number(req.body.num));
    res.send({ primeNumber });
});

app.use("*", (req: Request, res: Response): void => {
    res.status(404).send('please check your route');
});

export default app;