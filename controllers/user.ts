import express, { Router, Request, Response } from "express";
import user from "../models/user.js";

const userRoute: Router = express.Router();
const userdata = user;

userRoute.get("/", (req: Request, res: Response) => {
  res.json(userdata);
});

export default userRoute;
