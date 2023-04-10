import {Request, Response} from "express";
import loginService, {LogInParams} from "../services/login-service"
import httpStatus from "http-status";

export async function logInPost(req:Request, res:Response){
   const { email, password } = req.body as LogInParams;
    try {
      const result = await loginService.logIn({ email, password });
  
      return res.status(httpStatus.OK).send(result);
    } catch (error) {
      console.log(error)
      return res.status(httpStatus.UNAUTHORIZED).send({});
    }
}