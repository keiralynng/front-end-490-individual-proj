require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Hearts1030!",
  database: "sakila",
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/films", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM film LIMIT 10;");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database query failed" });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
