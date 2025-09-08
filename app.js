import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());

// app.use("/", router);

// app.use((req, res) => {
//   res.status(404).json({ error: "The path does not exist. Please check again." });
// });

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listening to the port : ${PORT}`);
});