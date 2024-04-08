import { createContext, useContext, useState } from "react";

export const AuthContext = createContext<any>(null);

export const useAuthContext = () => {
  return useContext(AuthContext);
};
let localValue: any = localStorage.getItem("chat-user");
export const AuthContextProvider = ({ children }: any) => {
  const [authUser, setAuthUser] = useState<any>(
    !!localStorage.getItem(JSON.parse(localValue)) || null
  );
  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
