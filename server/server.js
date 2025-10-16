import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

const app = express();

app.use(express.json());

app.use(cors());

dotenv.config();

const db = new pg.Pool({
  connectionString: process.env.DB_CONN,
});

app.get("/", (req, res) => {
  res.send("You are looking at my root route");
});

app.post("/destinations", (req, res) => {
  res.send("This is the post endpoint of destinations");
});

app.listen(8080, function () {
  console.log("Server is listening on port 8080...");
});
