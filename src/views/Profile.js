import React from "react";
import { useAuth } from "../utils/auth";
import { useNavigate } from "react-router-dom";

function Profile() {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navigate('/home')

  };
  return (
    <div>
      Welcome {auth.user}
      <button onClick={handleLogout}>logout</button>
    </div>
  );
}

export default Profile;
