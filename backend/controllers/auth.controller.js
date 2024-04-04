import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateJsonWebToken from "../utils/generateToken.js";

export const signUp=async(req,res)=>{
   try {
    const {fullName,userName,password,confirmedPassword,gender}=req.body;

    if(password!==confirmedPassword){
        return res.status(400).json({error:"Passwords don't match"})
    }

    const user = await User.findOne({userName})
    if(user){
        return res.status(400).json({error:"User name already exists"})
    }

    //Hash Password here
     const salt = await bcrypt.genSalt(10);
     const hashedPassword = await bcrypt.hash(password,salt)
     
     const boyProfilePic=`https://avatar-placeholder.iran.liara.run/public/boy?username=${userName}`
     const girlsProfilePic=`https://avatar-placeholder.iran.liara.run/public/girl?username=${userName}`

     const newUser = new User({
        fullName,
        userName,
        password:hashedPassword,
        gender,
        profilePic: gender==="male" ? boyProfilePic: girlsProfilePic
     });

     if(newUser){
        generateJsonWebToken(newUser._id,res)
        await newUser.save();

        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            userName:newUser.userName,
            profilePic:newUser.profilePic
         })
     }
     else{
        res.status(400).json({error:"Invalid User Data"})
     }
    
    } catch (error) {
    console.log("error in signup controller",error.message)
    res.status(200).json({error:"Internal Server Error"})
   }
}

export const login=async(req,res)=>{
   try {
    const {userName,password} = req.body;
    const user = await User.findOne({userName});
    const isPasswordCorrect = await bcrypt.compare(password,user.password || "");

    if(!user || !isPasswordCorrect){
        return res.status(400).json({error:"Invalid UserName Or Password"})
    }

    generateJsonWebToken(user._id,res);

    res.status(200).json({
        _id:user._id,
        fullName:user.fullName,
        userName:user.userName,
        profilePic:user.profilePic
    })

   } catch (error) {
    console.log("error in signup controller",error.message)
    res.status(200).json({error:"Internal Server Error"})
   }
}

export const logout=async(req,res)=>{
   try{
    res.cookie("jwt","",{maxAge:0})
    res.status(200).json({message:"logged out successfully"})
   }catch (error) {
    console.log("error in logout controller",error.message)
    res.status(200).json({error:"Internal Server Error"})
   }
}