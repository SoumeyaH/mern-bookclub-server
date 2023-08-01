const jwt = require("jsonwebtoken");
require('dotenv').config()

const { User } = require("../models");

const SECRET = process.env.SECRET

const protected = async (req, res, next) => {
  if (
    !req.headers.authorization ||
    !req.headers.authorization.startsWith("Bearer")
  ) {
    res.status(401).json({ message: "No token. User not authorized" });
    throw new Error("No token. User not authorized");
  }

  try {
    const token = req.headers.authorization.split(" ")[1];

    const { id } = jwt.verify(token, SECRET);
  
    req.user = await User.findById(id).select("-password");

    next();
  } catch (err) {
    res.status(401).json({ message: "User not authorized" });
    throw new Error("User not authorized");
  }
};

module.exports = { protected };