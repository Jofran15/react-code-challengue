import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Login from "./views/Login";
import NoPage from "./views/NoPage";

import NavigationBar from "./components/NavigationBar";

import "./App.css";
import Profile from "./views/Profile";
import { AuthProvider } from "./utils/auth";
import RequireAuth from "./components/RequireAuth";
import Favorites from "./views/Favorites";

function App() {
  return (
    <AuthProvider>
      <NavigationBar />
      <Routes>
        <Route index element={<Login />} />

        <Route path="home" element={<Home />} />
        <Route path="favorites" element={<Favorites/>} />
        <Route
          path="profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
