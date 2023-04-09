import { User } from "@prisma/client";
import { exclude } from "../utils/prisma-utils";
import userRepository from "../repositories/userRepository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
//types
export type RegisterParams = Pick<User, "email" | "password" | "username" | "image">;
//functions
async function registerUser({ email, password, username, image }: RegisterParams){
    const hashedPassword = await bcrypt.hash(password, 12);
    return userRepository.create({
        email,
        password: hashedPassword,
        username,
        image
    });
}
//export
const registerService = {
    
}
export default registerService;