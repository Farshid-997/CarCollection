const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = require("./utils/server");

// database connection

try {
  mongoose.set("strictQuery", false);
  mongoose.connect(process.env.DATABASE).then(() => {
    console.log(`Database Connected Successfully`);
  });
} catch (error) {
  res.status(400).json({
    status: "moongoose connection failed",
    message: "mongoose connection is not set properly",
    error: error.message,
  });
}
// server
const port = process.env.PORT || 6000;

// listen the port
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
