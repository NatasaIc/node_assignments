const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// This should not be here
// Create a .env file and make sure it is ignored by .gitignore
// Install "dotenv" and import it as such require("dotenv").config();
// Now we can access the contents of the .env-file via process.env
// Remove the JWT_SECRET constant and make use of the secret from the .env file

const JWT_SECRET = "my-secret-phrase";

module.exports.hashPassword = (password: any) => {
  const hashValue = bcrypt.hashSync(password, 8);
  return hashValue;
};

module.exports.comparePassword = (password: any, hash: any) => {
  const correct = bcrypt.compareSync(password, hash);
  return correct;
};

module.exports.getJWTToken = (account: { id: any; username: any }) => {
  const userData = { userId: account.id, username: account.username };
  const accessToken = jwt.sign(userData, JWT_SECRET);
  return accessToken;
};

module.exports.verifyJWT = (token: any) => {
  return jwt.verify(token, JWT_SECRET);
};

module.exports.decodeJWT = (token: any) => {
  return jwt.decode(token, JWT_SECRET);
};
