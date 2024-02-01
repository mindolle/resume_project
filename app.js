import express from "express";
import cookieParser from "cookie-parser";
import userRouter from "./routers/users.router.js";
import docRouter from "./routers/documents.router.js";
import ErrorHandlingMiddleware from "./middlewares/error-handling.middleware.js";
import LogMiddleware from "./middlewares/log.middleware.js";

const app = express();
const PORT = 3020;

app.use(express.json());
app.use(cookieParser());
app.use(ErrorHandlingMiddleware);
app.use(LogMiddleware);

app.use("/api", [userRouter, docRouter]);

app.listen(PORT, () => {
  console.log(PORT, "포트로 서버가 열렸어요!");
});
