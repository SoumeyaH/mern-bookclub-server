const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require('dotenv').config()

const SECRET = process.env.SECRET

const hashPassword = async function (next) {
  const salt = await bcrypt.genSalt();
  if (this.isNew || this.isModified("password")) {
    
    this.password = await new Promise((resolve, reject) => {
      bcrypt.hash(this.password, salt, function(err, hash) {
        if (err) reject(err)
        resolve(hash)
      });
    })
  }
  next();
};

const maxTokenAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, SECRET, {
    expiresIn: maxTokenAge,
  });
};

const authorize = async (user, password) => {
  const authorized = await bcrypt.compare(password, user.password);
  if (!authorized) throw Error("incorrect password");
  return user;
};

const loginUser = async function (username, email, password) {
  if (username) {
    const user = await this.findOne({ username });
    if (!user) throw Error("incorrect username");
    return await authorize(user, password);
  }

  if (email) {
    const user = await this.findOne({ email });
    if (!user) throw Error("incorrect email");
    return await authorize(user, password);
  }

};

module.exports = { hashPassword, createToken, loginUser };