import express from "express";
import dotenv from "dotenv";
import router from "./src/routes/posts.js"

dotenv.config();
const app = express();

app.use(express.json());

app.use("/", router);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listening to the port : ${PORT}`);
});