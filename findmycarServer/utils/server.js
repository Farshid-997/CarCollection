const express = require("express");
const app = express();
const cors = require("cors");



//middlewares
app.use(express.json());
app.use(cors());

const UsersRoute = require("../routes/v1/user.route");
const CarRoute = require("../routes/v1/car.route");



// user routes
app.use("/api/v1", UsersRoute);

app.use("/api/v1", UsersRoute);

// car routes
app.use("/api/v1",CarRoute);

app.use("/api/v1",CarRoute);



app.get("/", (req, res) => {
  res.send("car collection server is working...");
});


module.exports = app;
