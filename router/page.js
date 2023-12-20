const express = require("express");
const route = express();
const bodyParser = require("body-parser");
route.use(bodyParser.json());
route.use(express.urlencoded({ extended: true }));
const path = require("path");
const pageController = require("../controller/userController");
route.set("view engine", "ejs");
route.set("views", path.join(__dirname, "..", "views"));
route.use(
  "/css",
  express.static(path.join(__dirname, "..", "node_modules/bootstrap/dist/css"))
);
route.use(
  "/js",
  express.static(path.join(__dirname, "..", "node_modules/bootstrap/dist/js"))
);

route.get("/", pageController.loadVal);
route.post("/add", pageController.added);
route.post("/sub", pageController.substracted);

module.exports = route;
