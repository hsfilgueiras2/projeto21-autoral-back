import {Request, Response} from "express";
import  { RegisterParams} from "../services"
import registerService from "@/services/register-service";
import httpStatus from "http-status";

export async function registerPost(req:Request, res:Response){
  console.log("cheguei no registerpost")
    try{
    console.log(req.body)
    const {email,password,username,image} = req.body as RegisterParams;
    const user = await registerService.registerUser({email,password,username,image});
    return res.status(httpStatus.CREATED).json({
        id: user.id,
        email: user.email,
      });
    }
    catch(err){console.log(err)
    }
}