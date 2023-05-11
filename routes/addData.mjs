import express from "express";
import bcrypt from "bcryptjs";
import { connect } from "../db.mjs";
const add = express.Router();

add.post("/adddata", async (req, res) => {
  const client = await connect();
  var { name, email, password } = req.body;
  await bcrypt
    .genSalt(10)
    .then(async (salt) => {
      await bcrypt
        .hash(password, salt)
        .then(async (hash) => {
          let insertRow = await client.query(
            `INSERT INTO sellersquare(name,email,password) VALUES('${name}','${email}','${hash}')`
          );
          await client.end();
          return res
            .status(200)
            .json({ status: 0, message: `Inserted ${insertRow.rowCount} row` });
        })
        .catch((err) => {
          return res.status(401).json({ status: -1, error: err.message });
        });
    })
    .catch((err) => {
      return res.status(400).json({ status: -1, error: err.message });
    });
});

export default add;
