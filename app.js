if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
const express = require("express");
const { errorHandler } = require("./middlewares/errorHandler.js");
const app = express();
const router = require("./routes/index.js"); //ini harus berisi path ke router
const cors = require("cors");
app.use(express.static("upload"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/", router); //code ini akan menyerahkan isi localhost ke router

app.use(errorHandler);

module.exports = app;
