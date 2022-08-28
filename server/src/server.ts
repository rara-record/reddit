import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import { AppDataSource } from "./data-source";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

dotenv.config();

// app.get의 url로 접속하면 해당 블록의 코드를 실행한다
app.get("/", (_, res) => res.send("running"));

let PORT = 4000;

//app.listen의 포트로 접속하면 해당 블록의 코드를 실행한다
app.listen(PORT, async () => {
  console.log(`Server runiing ap http://localhost: ${PORT}`);

  AppDataSource.initialize()
    .then(async () => {
      console.log("database initialized");
    })
    .catch((error) => console.log(error));
});
