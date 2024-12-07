import bcryptjs from "bcryptjs";
import User from "../models/userModel.js";
import { errorhandler } from "../utils/errorHandler.js";
import jwt from "jsonwebtoken";

// signup
export const signup = async (req, res, next) => {
  const { name, email, password, location } = req.body;
  if (!email || !password || !name) {
    next(errorhandler(400, "All fields are required"));
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    next(errorhandler(400, "Email already exists"));
    return;
  }

  let hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({
    name,
    email,
    password: hashedPassword,
    location: {
      type: "Point",
      coordinates: [location.latitude, location.longitude],
    },
  });

  try {
    await newUser.save();
    res.json({
      success: true,
      message: "User registered successfully",
      status: 200,
    });
  } catch (error) {
    next(error);
  }
};

// login
export const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    next(errorhandler(400, "All fields are required"));
    return;
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      next(errorhandler(401, "Invalid credentials"));
      return;
    }
    const isMatch = bcryptjs.compareSync(password, user.password);
    console.log(isMatch);
    if (!isMatch) {
      next(errorhandler(401, "Invalid credentials"));
      return;
    }
    const jwtSecret = process.env.JWT_SECRET;
    const token = jwt.sign({ email, userId: user._id }, jwtSecret);

    const { password:pass, ...rest } = user._doc;

    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};
