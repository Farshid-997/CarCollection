const express = require("express");
const carController = require("../../Controller/car.controller");


const router = express.Router();

router.route("/").post(carController.postCars)
.get(carController.getAllCars)
.delete(carController.deleteAllCars)


router
  .route("/:id")
  .get(carController.getCarsById)
  .delete(carController.deleteSingleCar)
  .patch(carController.editCar);


module.exports = router;
