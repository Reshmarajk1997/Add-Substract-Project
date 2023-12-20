const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/add_Sub");

const user_Route = require("./router/page");

app.use("/", user_Route);
app.listen(3000, () => console.log("working"));
