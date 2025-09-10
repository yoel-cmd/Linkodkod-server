import express from "express";
import dotenv from "dotenv";
import cors from "./src/middlewares/CORS.js";
import router from "./src/routes/posts.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors);
app.use(express.static("public"));

app.use("/", router);

app.use((req, res) => {
  res.status(404).json({ error: "The path does not exist." });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening to the port ${PORT}`));

