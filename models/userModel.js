const mongoose = require("mongoose");

//schema design for user

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },

    email: {
      type: String,
      required: [true, "Unique Email Id is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is Required"],
    },
  },
  { timestamps: true }
);

//exporting

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
