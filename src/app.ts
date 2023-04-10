
import express, { Express } from "express";
import cors from "cors";
import { connectDB, disconnectDB } from "./config";
import { loginRouter } from "./routers/login-router";
import { registerRouter } from "./routers/register-router";
import { markersRouter } from "./routers/markers-router";
import { storiesRouter } from "./routers/stories-router";

const app = express();
app
    .use(express.json())
    .use(cors())
    .use("/login", loginRouter)
    .use("/register", registerRouter)
    .use("/markers", markersRouter)
    .use("/stories", storiesRouter)
    ;



export function init(): Promise<Express> {
    connectDB();
    return Promise.resolve(app);
}

export async function close(): Promise<void> {
    await disconnectDB();
}

export default app;