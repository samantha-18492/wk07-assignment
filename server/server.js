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

app.get("/", async (req, res) => {
  const result = await db.query(`SELECT * FROM destination_details`);
  res.json(result.rows);
});

app.post("/destination", (req, res) => {
  res.send("This is the post endpoint of destinations");
});

app.listen(8080, function () {
  console.log("Server is listening on port 8080...");
});
