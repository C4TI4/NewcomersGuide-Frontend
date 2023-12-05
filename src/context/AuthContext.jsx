import { useState, createContext, useContext, useEffect } from 'react';
import {sendToken} from "../lib/dbClient"

const AuthContextObj = createContext();

const useAuthContext = () => useContext(AuthContextObj);

export const AuthContext = ({ children }) => {



  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
(  
    async() => { 
        if (token) {
        const response = await sendToken(token);
        setUser(response);
        setIsAuth(true);
    }})()
  }, [token]);

  return (
    <AuthContextObj.Provider value={{ token, setToken, isAuth, setIsAuth, user, setUser }}>
        {children}
    </AuthContextObj.Provider>
  );
};

export default useAuthContext;