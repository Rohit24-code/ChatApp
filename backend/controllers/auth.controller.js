export const signUp=async(req,res)=>{
   try {
    const {fullName,userName,password,confirmedPassword,gender}=req.body;
   } catch (error) {
    console.log(error)
   }
}

export const login=(req,res)=>{
    res.send("login")
}

export const logout=(req,res)=>{
    res.send("logout")
}