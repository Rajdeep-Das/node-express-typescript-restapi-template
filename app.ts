import express, { Request, Response, Application } from "express";
import userRoute from "./controllers/user";

const app: Application = express();
const port = process.env.PORT || 3000;

app.use("/api/user", userRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Typescript with Node.js!");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
