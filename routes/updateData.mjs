import express from "express";
import { connect } from "../db.mjs";
const update = express.Router();

update.put("/updatename", async (req, res) => {
  const client = await connect();
  let dataid = req.query.id;
  let nameU = req.body.name;
  try {
    let query = `UPDATE sellersquare SET name='${nameU}' WHERE id=${dataid} RETURNING *;`;
    let result = await client.query(query);
    await client.end();
    return res.status(200).json({ status: 0, data: result.rows[0] });
  } catch (err) {
    return res.status(400).json({ status: -1, error: err.message });
  }
});

update.put("/updateemail", async (req, res) => {
  const client = await connect();
  let dataid = req.query.id;
  let email = req.body.email;
  try {
    let query = `UPDATE sellersquare SET email='${email}' WHERE id=${dataid} RETURNING *;`;
    let result = await client.query(query);
    await client.end();
    return res.status(200).json({ status: 0, data: result.rows[0] });
  } catch (err) {
    return res.status(400).json({ status: -1, error: err.message });
  }
});

export default update;
