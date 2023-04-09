import {registerPost} from "../controllers";
import { Router } from "express";

const registerRouter = Router();

registerRouter.post("/", registerPost)

export{registerRouter}