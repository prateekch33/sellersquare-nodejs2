import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import { connect } from "./db.mjs";
import createTable from "./routes/createTable.mjs";
import add from "./routes/addData.mjs";
import read from "./routes/readData.mjs";
import update from "./routes/updateData.mjs";
import deleteData from "./routes/deleteData.mjs";
dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
connect();
const port = process.env.PORT;
createTable();

app.get("/", (req, res) => {
  res.send("API Working Successfully!!");
});
app.use(add);
app.use(read);
app.use(update);
app.use(deleteData);

app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});
