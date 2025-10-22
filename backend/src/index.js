import express from "express";
import cors from "cors";
import { Mongo } from "./database/mongo.js";
import { config } from "dotenv";
import authRouter from "./auth/auth.js";
import usersRouter from "./routes/users.js";
import platesRouter from "./routes/plates.js";

config();

// PRIMEIROS PASSOS
async function main() {
  const hostname = "localhost";
  const port = 3000;

  const app = express();

  // CONECTANDO AO BANCO MONGODB
  await Mongo.connect({
    mongoConnectionString: process.env.MONGO_CS,
    mongoDbName: process.env.MONGO_DB_NAME,
  });

  app.use(express.json());
  app.use(cors());

  app.get("/", (req, res) => {
    res.send({
      success: true,
      statusCode: 200,
      body: "WELCOME to MyGastronomy!",
    });
  });

  app.use("/auth", authRouter);
  app.use("/users", usersRouter);
  app.use("/plates", platesRouter);

  app.listen(port, () => {
    console.log(`Server running on http://${hostname}:${port}`);
  });
}

main();
