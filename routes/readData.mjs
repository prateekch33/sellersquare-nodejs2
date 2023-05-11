import express from "express";
import { connect } from "../db.mjs";
const read = express.Router();

read.get("/readdata", async (rq, res) => {
  const client = await connect();
  try {
    let enteries = await client.query(`SELECT * FROM  sellersquare`);
    await client.end();
    return res.status(200).json({ status: 0, data: enteries.rows });
  } catch (err) {
    return res.status(400).json({ status: -1, error: err.message });
  }
});

export default read;
