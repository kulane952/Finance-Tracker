import User from "../models/user.js";
import cloudnary from "../utils/cloudinary.js";

export const profile = async (req, res) => {
  try {
    console.log(req.file);
    console.log(req.user);
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    const result = await cloudnary.uploader.upload(req.file.path, {
      folder: "Financhal_Tracker",
    });

    const user = await User.findByIdAndUpdate(
      req.user._id,
      {
        profileImage: result.secure_url,
      },
      {
        returnDocument: "after",
      },
    ).select("-password");

    return res.status(200).json({
      success: true,
      message: "profile successfull",
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
