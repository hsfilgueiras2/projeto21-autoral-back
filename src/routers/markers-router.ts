import { Router } from "express";
import { validateToken } from "@/middlewares/token-middleware";
import { getAllMarkers } from "@/controllers";


const markersRouter = Router();

markersRouter
    .all("/*",validateToken)
    .get("/",getAllMarkers);

export {markersRouter};