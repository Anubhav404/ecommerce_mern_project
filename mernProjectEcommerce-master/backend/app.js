const express = require("express");
const app = express();
 
//const bodyParser = require("body-parser");
 
const path = require("path");

const errorMiddleware = require("./middleware/error");
 

app.use(express.json());
 
app.use(bodyParser.urlencoded({ extended: true }));

 

// Route Imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
