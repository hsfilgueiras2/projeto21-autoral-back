import { Router } from "express";
import { validateToken } from "@/middlewares/token-middleware";

const storiesRouter = Router();

storiesRouter
    .all("/*",validateToken);

export {storiesRouter};