import express from "express";
import { connect } from "../db.mjs";
const deleteData = express.Router();

export default deleteData.delete("/deletedata", async (req, res) => {
  const client = await connect();
  let dataid = req.query.id;
  try {
    let query = `DELETE FROM sellersquare WHERE id=${dataid} RETURNING *;`;
    let result = await client.query(query);
    await client.end();
    return res.status(200).json({ status: 0, data: result.rows[0] });
  } catch (err) {
    return res.status(400).json({ status: -1, error: err.message });
  }
});
