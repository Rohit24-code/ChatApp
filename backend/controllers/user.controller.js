import User from "../models/user.model.js";

export const getUsersForSideBar=async(req,res)=>{
  try {
    const loggedInUser = req.user._id;
    //this gives all user except the one that is logged in 
    const allUsersExceptLoggedIn = await User.find({_id:{$ne: loggedInUser}}).select("-password")

    if(!allUsersExceptLoggedIn){
       return res.status(201).json({message:"No User Found"})
    }
    
    res.status(200).send(allUsersExceptLoggedIn)
  } catch (error) {
    console.log("error in getUserForSIdeBar",error.message)
    res.status(500).json({error:"Internal server error"})
  }
}