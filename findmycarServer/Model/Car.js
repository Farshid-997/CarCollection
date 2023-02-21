const mongoose = require("mongoose");

// const bcrypt = require("bcryptjs");

// schema design
const carSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Please Provide a name"],
      minlength: [10, "Name must be at least 10 length character"],
      maxlength: [50, "Name is too large"],
    },
    password: {
      type: String,
      required: [true, "Please Provide a password"],
    },
    role: {
      type: String,
      enum: ["Admin", "User"],
      default: "User",
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (value) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
        },
        message: `This is not valid for Email address`,
      },
    },

    active: {
      type: Boolean,
      default: true,
    },

    phone: {
      type: String,
      trim: true,
      validate: {
        validator: function (value) {
          return /^\d{11}$/.test(value);
        },
        message: "Enter a valid phone number",
      },
    },

    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
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
