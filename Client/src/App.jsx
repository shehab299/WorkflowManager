import React, { StrictMode, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useAuth } from "./utils/AuthContext";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Workflow from "./pages/Workflow";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      {isAuthenticated ? (
        <>
          <Sidebar />
          <Routes>
            <Route path="/workflow" element={<Workflow />} />
            <Route path="/dashboard" element={<div>Dashboard</div>} />
            <Route path="/*" element={<Navigate to="/workflow" />} />
            <Route path="/" element={<Navigate to="/workflow" />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/*" element={<Navigate to="/signup" />} />
          <Route path="/" element={<Navigate to="/signup" />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
