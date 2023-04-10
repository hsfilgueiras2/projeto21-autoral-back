import { User } from "@prisma/client"
import { exclude } from "../utils/prisma-utils";
import sessionRepository from "../repositories/sessionRepository";
import userRepository from "../repositories/userRepository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//types
export type LogInParams = Pick<User, "email" | "password">;

type LogInResult = {
    user: Pick<User, "id" | "email">;
    token: string;
};

type GetUserOrFailResult = Pick<User, "id" | "email" | "password">;


//functions
async function logIn(params: LogInParams): Promise<LogInResult>{
    const { email, password } = params;
    const user = await getUserOrFail(email);
    await validatePasswordOrFail(password, user.password);
    const token = await createSession(user.id);
    return {
        user: exclude(user, "password"),
        token,
    };
}
async function getUserOrFail(email: string): Promise<GetUserOrFailResult> {
    console.log(email)
    const user = await userRepository.findByEmail(email, { id: true, email: true, password: true });
  
    return user;
}
async function createSession(userId: number) {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET);
    await sessionRepository.close(userId)
    await sessionRepository.create({
      token,
      userId,
    });
  
    return token;
}
async function validatePasswordOrFail(password: string, userPassword: string) {
    console.log(password)
    const isPasswordValid = await bcrypt.compare(password, userPassword);
}

//export
const loginService = {
    logIn
};

export default loginService;