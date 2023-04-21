import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../utils/auth";

function NavigationBar() {
  const auth = useAuth();
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>

          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
          <li>{auth.user && <Link to="/profile">Profile</Link>}</li>
          <li>{!auth.user && <Link to="/login">Login</Link>}</li> 
          
        
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default NavigationBar;
