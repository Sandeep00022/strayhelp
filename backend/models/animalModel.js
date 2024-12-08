const mongoose = require("mongoose");
const { Schema } = mongoose;

const AnimalSchema = new Schema({
  name: {
    type: String,
    required: [true, "Animal name is required"],
    trim: true,
    minlength: 2,
    maxlength: 50,
  },
  age: {
    type: Number,
    required: [true, "Animal age is required"],
    min: 0,
  },
  breed: {
    type: String,
    trim: true,
    maxlength: 50,
  },
  description: {
    type: String,
    trim: true,
    maxlength: 500,
  },
  pictures: [
    {
      type: String,
      default:"https://th.bing.com/th/id/OIP.5aKhA8rhSGnJzNnkGJgtLwHaLH?rs=1&pid=ImgDetMain"
    },
  ],
  location: {
    type: {
      type: String,
      enum: ["Point"],
      default: "Point",
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  status: {
    type: String,
    enum: ["Available", "Adopted", "Pending"],
    default: "Available",
  },
  postedBy: {
    type: Schema.Types.ObjectId,
    ref: "User", 
    required: true,
  },
  datePosted: {
    type: Date,
    default: Date.now,
  },
});

AnimalSchema.index({ location: "2dsphere" });

const animal = mongoose.model("Animal", AnimalSchema);

export default animal;
