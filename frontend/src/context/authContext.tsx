import { createContext, useState } from "react";

export const AuthContext = createContext<any>(null);
let localValue:any=localStorage.getItem("chat-user")
export const AuthContextProvider =({children}:any)=>{
    const [authUser,setAuthUser]=useState<any>(!!localStorage.getItem( JSON.parse(localValue) ) || null)
  return <AuthContext.Provider value={{authUser,setAuthUser}}>{children}</AuthContext.Provider>
}