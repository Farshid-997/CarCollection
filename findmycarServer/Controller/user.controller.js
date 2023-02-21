const UserModel = require("./../Model/User");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');

exports.signUp = async (req, res) => {
  try {
    const user = await UserModel.create(req.body);

    res.status(200).json({
      status: true,
      message: "successfully signed up",
      data: user,
    });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const user = await UserModel.find({ username: req.body.username });
    if (user && user.length > 0) {
      const isValidPassword = await bcrypt.compare(
        req.body.password,
        user[0].password
      );
      if (isValidPassword) {
        const token = jwt.sign(
          {
            username: user[0].username,
            userId: user[0]._id,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "2 days",
          }
        );

        res.status(200).json({
          access_token: token,
          message: "successfully login",
        });
      }
    } else {
      res.status(401).json({
        error: "Authentication failed!",
      });
    }

  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};