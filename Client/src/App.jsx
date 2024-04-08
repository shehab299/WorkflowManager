import React, { StrictMode, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SignUp from './pages/SignUp';
import Login from './pages/Login';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    setLoggedIn(true);
  }

  return (
    <Router>
      {isLoggedIn == true ? (
        <Routes>
          <Route path="/dashboard" element={<h1>Welcome</h1>} />
          <Route path="/*" element={<Navigate to="/dashboard" />} />
          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
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
