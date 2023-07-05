import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import morgan from "morgan";
import apiRouter from "./api/routers";
import bodyParser from "body-parser";
import { errorHandler } from "./errors";

const app = express();



app.use(cors());
app.use(morgan("tiny"));
app.use(bodyParser.json());

app.use("/api", apiRouter);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200);
  res.send("Hello Wordl");
});

app.listen(3000, () => {
  console.log("server listening on port 3000");
});

app.use(errorHandler);


export default app;