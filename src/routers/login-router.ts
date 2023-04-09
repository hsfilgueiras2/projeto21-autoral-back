import { logInPost } from "../controllers";
import { Router } from "express";

const loginRouter = Router();

loginRouter.post("/", logInPost)

export{loginRouter}