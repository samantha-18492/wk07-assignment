import express, { json, response } from "express";
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

app.get("/destination/:id", async (req, res) => {
  const id = req.params.id;

  const details = (
    await db.query(`SELECT * FROM destination_details WHERE id= $1`, [id])
  ).rows[0];

  const reviews = (
    await db.query(
      `SELECT * FROM destination_reviews WHERE destination_id=$1`,
      [id]
    )
  ).rows;

  res.json({ ...details, reviews });
});

app.post("/destination/:id", async (req, res) => {
  const body = req.body;
  const nameFromClient = body.name;
  const commentFromClient = body.comment;
  const destinationIdFromClient = body.destinationId;

  const data = await db.query(
    `INSERT INTO destination_reviews (destination_id, name, comment) VALUES ($1, $2, $3)`,
    [destinationIdFromClient, nameFromClient, commentFromClient]
  );
  res.json({ status: `Review inserted into database` });
});

app.listen(8080, function () {
  console.log("Server is listening on port 8080...");
});
