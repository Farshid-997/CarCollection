const Car = require("../Model/Car");

// send data to db

exports.postCars = async (req, res, next) => {
  try { 
   
    const car = await Car.create(req.body);
   

    res.status(201).json({
      status: true,
      message: "Data Inserted Successfully",
      data: car,
    });
  } catch (error) {
    res.status(400).json({
      status: "Something Wrong",
      message: "Data is not Inserted Successfully",
      error: error.message,
    });
  }
};

// all cars

module.exports.getAllCars = async (req, res, next) => {
  try {
    const car = await Car.find({})
    
    
    res.status(201).json({
      status: "success",
      data: car,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "cant get the data",
      error: error.message,
    });
  }
};

//car by id

module.exports.getCarsById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const car = await Car.findOne({ _id: id });
    res.status(201).json({
      status: "success",
      message: "car data fetch successfully!",
      data: car,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "failed to get data",
      error: error.message,
    });
  }
};

//   delete single car
module.exports.deleteSingleCar = async (req, res, next) => {
  try {
    const cursor = req.params.id;

    const filter = { name: cursor };
    const car = await Car.deleteOne({ filter });

    if (!courses.deletedCount) {
      res.status(201).json({
        status: "success",
        message: "cars data deleted successfully!",
        data: car,
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "failed to delete data",
      error: error.message,
    });
  }
};

//delete All Car

module.exports.deleteAllCars = async (req, res, next) => {
 
  try {
    const car = await Car.deleteMany({});

    if (!courses.deletedCount) {
      res.status(201).json({
        status: "success",
        message: "cars data deleted successfully!",
        data: car,
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "failed to delete data",
      error: error.message,
    });
  }
};

//edit car

module.exports.editCar = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Car.updateOne({ _id: id }, { $set: req.body });

    res.status(201).json({
      status: "success",
      message: "car data updated successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "failed to update data",
      error: error.message,
    });
  }
};

