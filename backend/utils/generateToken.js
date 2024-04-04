import jwt from "jsonwebtoken";

const generateJsonWebToken=(userId,res)=>{
  const token= jwt.sign({userId},process.env.JWT_SECRET,{
    expiresIn:'15d'
  })

  res.cookie("jwt",token,{
    maxAge:15 *24 * 60 * 60 * 1000,//ms
    httpOnly:true, //prevent XSS cross-site scripting attacks
    sameSite:"strict", // CSRF attacksd cross site forgery attacks
    secure: process.env.NODE_ENV != "development"
})
}



export default generateJsonWebToken;