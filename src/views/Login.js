import React, { useState } from "react";
import { useAuth } from "../utils/auth";
import { useNavigate,useLocation } from "react-router-dom";

function Login() {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation()

  const redirecPath = location.state?.path || '/home'

  const handleLogin = () => {
    auth.login(user);
    navigate(redirecPath,{replace:true});
  }
  return (
  <div>
    <label>
      User name:{''}
      <input type="text" onChange={(e)=>setUser(e.target.value)}/>
    </label>
    <button onClick={handleLogin}>Login</button>

  </div>
  )
}

export default Login;
