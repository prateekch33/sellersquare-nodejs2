import pkg from "pg";
import dotenv from "dotenv";
dotenv.config();
const { Client } = pkg;

export const connect = async () => {
  const client = new Client({
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    user: process.env.PG_USER,
    password: process.env.PG_PASS,
    database: process.env.PG_DB,
    ssl: false,
  });
  await client.connect();
  const res = await client.query("SELECT $1::text as connected", [
    "Connection to postgres successful!",
  ]);
  console.log(res.rows[0].connected);
  return client;
};
