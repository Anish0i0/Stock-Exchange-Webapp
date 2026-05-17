const User = require("../models/UserModel");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const { createSecretToken } = require("../utils/SecretToken");

module.exports.Signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    const token = createSecretToken(user._id);

    res.status(201).json({
      success: true,
      message: "Signup successful",
      token,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.json({
        success: false,
        message: "Incorrect email or password",
      });
    }

    const auth = await bcrypt.compare(password, user.password);

    if (!auth) {
      return res.json({
        success: false,
        message: "Incorrect email or password",
      });
    }

    const token = createSecretToken(user._id);

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports.verifyUser = async (req, res) => {
  const authHeader = req.headers.authorization;
  let token = req.cookies.token;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.substring(7);
  }

  if (!token) {
    console.error("NO TOKEN PROVIDED");
    return res.json({
      status: false,
      message: "No token provided",
    });
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) {
      console.error("TOKEN VERIFICATION FAILED:", err.message);
      return res.json({
        status: false,
        message: `Verification failed: ${err.message}`,
      });
    } else {
      console.log("TOKEN VERIFIED SUCCESSFULLY FOR USER:", decoded.id);
      return res.json({
        status: true,
      });
    }
  });
};

module.exports.Logout = async (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "none",
    secure: true,
  });

  return res.json({
    success: true,
  });
};
