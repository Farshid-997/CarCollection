const express = require("express");
const app = express();
const cors = require("cors");



//middlewares
app.use(express.json());
app.use(cors());

const UsersRoute = require("../routes/v1/user.route");


app.use("/api/v1", UsersRoute);

app.use("/api/v1", UsersRoute);


app.get("/", (req, res) => {
  res.send("Unive server is working...");
});


module.exports = app;
