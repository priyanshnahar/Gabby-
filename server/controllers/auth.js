import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

// REGISTER

export const register = async(req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occuppation,
    } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
        firstName,
        lastName,
        email,
        password: passwordHash,
        picturePath,
        friends,
        location,
        occuppation,
        viewedProfile: Math.floor(Math.random() * 10000),
        impression: Math.floor(Math.random() * 10000)
    });
    const savedUser = await newUser.save();
    register.status(201).json(savedUser);

  } catch (err) {
    res.status(500).json({error: err.message});
  }
};
