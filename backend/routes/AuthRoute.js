const router = require("express").Router();

const {
  Signup,
  Login,
  verifyUser,
  Logout,
} = require("../controllers/AuthController");

router.post("/signup", Signup);

router.post("/login", Login);

router.post("/", verifyUser);

router.post("/logout", Logout);

module.exports = router;
