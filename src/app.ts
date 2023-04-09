import "express-async-errors";
import express, { Express } from "express";
import cors from "cors";
import { connectDB, disconnectDB } from "./config";
import { loginRouter } from "./routers/login-router";
import { registerRouter } from "./routers/register-router";

const app = express();
app
    .use("/login", loginRouter)
    .use("/register", registerRouter);



export function init(): Promise<Express> {
    connectDB();
    return Promise.resolve(app);
}

export async function close(): Promise<void> {
    await disconnectDB();
}

export default app;