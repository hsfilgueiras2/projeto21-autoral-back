import {Request, Response} from "express";
import loginService, {LogInParams} from "../services/login-service"
export async function logInPost(req:Request, res:Response){
    const {email,password} = req.body as LogInParams;
}