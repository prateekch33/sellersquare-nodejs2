import { connect } from "../db.mjs";

const createTable = async () => {
  const client = await connect();
  let createTableQuery = `CREATE TABLE IF NOT EXISTS sellersquare(id BIGSERIAL PRIMARY KEY NOT NULL, name VARCHAR, email VARCHAR, password VARCHAR, date TIMESTAMP NOT NULL DEFAULT current_timestamp);`;
  const res = await client.query(createTableQuery);
  console.log("Table Created!!");
  await client.end();
};

export default createTable;
