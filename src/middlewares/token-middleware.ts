import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import sessionRepository from "@/repositories/sessionRepository";

export async function validateToken(req:Request, res: Response, next: NextFunction){
    const authHeader = req.header("Authorization");
    console.log(authHeader)
    if (!authHeader) return res.send(httpStatus.UNAUTHORIZED);
    const token = authHeader.split(" ")[1];
    console.log(token)
    if (!token) return res.send(httpStatus.UNAUTHORIZED);
    try {    
        const session = await sessionRepository.findByToken(token);
        if (!session) return res.send(httpStatus.UNAUTHORIZED);
        return next();
    } catch (err) {
        return res.send(httpStatus.UNAUTHORIZED);
    }
}