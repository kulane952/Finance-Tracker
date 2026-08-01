import User from "../models/user.js";
import { generateToken } from "../utils/generateToken.js";


// =========================
// REGISTER USER
// =========================

export const register = async (req, res, next) => {

  const {
    name,
    email,
    password,
    role,
    profileImage
  } = req.body;

  try {

    const exists = await User.findOne({
      email
    });

    if (exists) {

      return res.status(400).json({
        success: false,
        message: "Email already in use"
      });

    }

    const user = await User.create({

      name,
      email,
      password,
      role,
      profileImage

    });

    const token = generateToken(
      user._id
    );

    res.status(201).json({

      success: true,

      token,

      user: {

        _id: user._id,

        name: user.name,

        email: user.email,

        role: user.role,

        profileImage: user.profileImage,

        avatar: user.avatar

      }

    });

  } catch (error) {

    console.log(error);

    next(error);

  }

};



// =========================
// LOGIN USER
// =========================

export const login = async (req, res, next) => {

  const {
    email,
    password
  } = req.body;

  try {

    const user = await User.findOne({
      email
    });

    console.log("USER:", user);

    if (!user) {

      return res.status(401).json({

        success: false,
        message: "User not found"

      });

    }

    const match =
      await user.comparePassword(
        password
      );

    console.log(
      "PASSWORD MATCH:",
      match
    );

    if (!match) {

      return res.status(401).json({

        success: false,
        message: "Invalid password"

      });

    }

    const token =
      generateToken(
        user._id
      );

    res.json({

      success: true,

      token,

      user: {

        _id: user._id,

        name: user.name,

        email: user.email,

        role: user.role,

        profileImage: user.profileImage,

        avatar: user.avatar

      }

    });

  } catch (error) {

    console.log(error);

    next(error);

  }

};