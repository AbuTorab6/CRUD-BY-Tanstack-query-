const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());

var productRouter = require("./routers/productRouter");

/*========================================*/
/*============security package=============*/
/*=========================================*/
var cors = require("cors");
var mongoSanitize = require("express-mongo-sanitize");
var helmet = require("helmet");
var hpp = require("hpp");
var xssClean = require("xss-clean");
var rateLimit = require("express-rate-limit");

app.use(cors());
app.use(mongoSanitize());
app.use(helmet());
app.use(hpp());
app.use(xssClean());
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

/*========================================*/
/*================Routing=================*/
/*========================================*/
app.use("/", productRouter);

app.use("*", (req, res) => {
  res.status(404);
  res.send("Sorry! Wrong url");
});

/*=========================================*/
/*======connect backend with front end=====*/
/*=========================================*/
app.use(express.static("./front-end/build"));
app.get("*", (req, res) => {
  req.sendFile(path.resolve(__dirname, "front-end", "build", "index.html"));
});

/*========================================*/
/*======mongoDB Database connection=======*/
/*========================================*/

var URI =
  "mongodb+srv://<username>:<password>@cluster0.rl4dqmo.mongodb.net/TanstackCrudDB2?retryWrites=true&w=majority";
var OPTION = {
  user: "",
  pass: "",
  autoIndex: true,
};

mongoose
  .connect(URI, OPTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => {
    console.log("connection established");
  })
  .catch((err) => {
    console.log("connection failed");
  });

app.listen(5000);
