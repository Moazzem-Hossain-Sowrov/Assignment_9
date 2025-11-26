import { useContext } from "react";
import router from "./Routes";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router";

const privateRoute =({children}) => {
  const {user, loading} =useContext(AuthContext)
 
  if(loading){
    return <p>Loading......</p>
  }

  if(user){
    return children
  }
  return <Navigate to ='/login'></Navigate>
  
    
  }


export default privateRoute;