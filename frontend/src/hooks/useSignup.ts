import { useState } from "react";
import toast from 'react-hot-toast'
import { useAuthContext } from "../context/authContext";

const useSignup = () => {
 const [loading,setLoading]=useState(false);
 const {authUser,setAuthUser}=useAuthContext()

 const signUp = async({fullName,userName,password,confirmedPassword,gender}:any)=>{
      const success = handleInputErrors({fullName,userName,password,confirmedPassword,gender});

      if(!success) return;

      try {
        const res:any = await fetch("/api/auth/signup",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({fullName,userName,password,confirmedPassword,gender})
        })

        const data=await res.json()
        console.log(data)

        if(data?.error){
          throw new Error(res.error)
        }

        // local storage 
        localStorage.setItem("chat-user",JSON.stringify(data))

        //update context
        setAuthUser(data)
        
      } catch (error:any) {
        toast.error(error.message)
      }finally{
        setLoading(false)
      }
 }

 return {loading,signUp}
}

export default useSignup

function handleInputErrors({fullName,userName,password,confirmedPassword,gender}:any){
    if(!fullName || !userName || !password || !confirmedPassword || !gender){
        toast.error("Please Input All the fields")
        return false
    }

    if(password!==confirmedPassword){
        toast.error("Password doesn't match")
        return false
    }

    if(password.length<6){
        toast.error("password must be of 6 characters")
        return false;
    }

    return true;
}
