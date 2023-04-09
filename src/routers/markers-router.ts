import { Router } from "express";
import { validateToken } from "@/middlewares/token-middleware";

const markersRouter = Router();

markersRouter
    .all("/*",validateToken);

export {markersRouter};