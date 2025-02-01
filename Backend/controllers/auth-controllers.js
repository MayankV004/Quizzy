import User from "../models/user-model.js";
import encrypt from "../utils/encrypt.js";
import decrypt from "../utils/decrypt.js";
import generateTokenAndSetCookie from "../utils/generateTokenAndSetCookie.js";

export const SignUp = async (req, res) => {
  try {
    const { fullname, email, password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Invalid Password" });
    }

    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ error: "Username already exist" });

    const hashPassword = await encrypt(password); // password hashing

    const newUser = new User({
      fullname,
      email,
      password: hashPassword,
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullname: newUser.fullname,
        email: newUser.email,
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: "Invalid Data",
    });
  }
};
export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    const isPasswordCorrect = decrypt(password, user.password);

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid User" });
    }
    generateTokenAndSetCookie(user._id, res);
    res.status(200).json({
      _id: user._id,
      email: user.email,
      status: "pass",
      message: "success",
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};
export const Logout = async (req, res) => {
  try {
    res.cookie("token", "", { maxAge: 0 });
    res.status(200).json({ message: "Logout success", status: "pass" });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};
