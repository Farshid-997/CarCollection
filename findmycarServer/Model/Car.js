const mongoose = require("mongoose");



// schema design
const carSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Please Provide a car name"],
      minlength: [10, "Name must be at least 10 length character"],
      maxlength: [50, "Name is too large"],
    },
   brand: {
      type: String,
      required: [true, "Please Provide a brand Name"],
    },
    model: {
      type: String,
      required: [true, "Please Provide a model of the car"],
    },
    color: {
      type: String,
     
    },
    weight: {
      type: String,
    },
    price:{
      type:Number
    }
  },

  {
    timestamps: true,
  }
);

// usersSchema.pre("save", function (next) {
//   const password = this.password;
//   const hashedPassword = bcrypt.hashSync(password);

//   this.password = hashedPassword;

//   next();
// });

// usersSchema.methods.comparePassword = function (password, hash) {
//   const isPasswordValid = bcrypt.compareSync(password, hash);
//   return isPasswordValid;
// };

const Car = mongoose.model("Car", carSchema, "Car");

module.exports = Car;
