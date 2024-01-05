const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

if (process.env.NODE_ENV == "dev") {
  dotenv.config({ path: ".env.dev" });
} else if (process.env.NODE_ENV == "production") {
  dotenv.config({ path: ".env.production" });
}
// parser application/json
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(cors());
app.use((req, res, next) => {
  res.set("Cache-Control", "no-store");
  next();
});

__dirname = path.resolve();

if (process.env.NODE_ENV == "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Server is running .. 🚀");
  });
}

//error handling
app.use((err, req, res, next) => {
  // log.error(err.message);
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = app;
