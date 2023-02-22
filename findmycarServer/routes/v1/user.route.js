const express = require("express");
const router = express.Router();
const userController = require("../../Controller/user.controller");

router.route("/signup").post(userController.signUp);
router.route("/login").post(userController.loginUser)

module.exports = router;