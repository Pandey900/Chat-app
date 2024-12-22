import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  res.cookie("token", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, //MiliSeconds
    httpOnly: true, //prevents cookie from being accessed by client side javascript or from XSS attacks cross site scripting attacks
    sameSite: "strict", //To prevent from CSRF attacks cross site request forgery attacks
    secure: process.env.NODE_ENV !== "development", //Cookie will only be set in production mode
  });
};
export default generateTokenAndSetCookie;
