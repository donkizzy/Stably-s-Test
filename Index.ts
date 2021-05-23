import cors from "cors";
import express, { json, NextFunction, Request, Response } from "express";
import path from 'path';
import highestPrimeNumber from "./src/utils/HighestPrimeNumber";

// Initialize express app
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(json());

app.get("/", (req: Request, res: Response): void => {
    //TODO : Serve html page here
});
app.post('/find/:num',(req: Request, res: Response): void => {
    var primeNumber = highestPrimeNumber(Number(req.params.num)) ;
    res.send({primeNumber});
    });

app.use("*", (req: Request, res: Response): void => {
    res.status(404).send('please check your route');
});

app.listen(PORT, async (): Promise<void> =>
    console.log(`Server listening on port ${PORT}!`)
)