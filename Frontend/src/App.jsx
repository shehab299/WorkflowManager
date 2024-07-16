import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Users from "./pages/Users/Users";
import EditUser from "./pages/EditUser/EditUser";
import WorkFlow from "./pages/WorkFlow/WorkFlow";
import AddWorkFlow from "./pages/AddWorkFlow/AddWorkFlow";
import EditWorkFlow from "./pages/EditWorkFlow/EditWorkFlow";

import { useAuth } from "./contexts/AuthContext";
import { UsersProvider } from "./contexts/UsersContext";

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      <UsersProvider>
        {isAuthenticated ? (
          <>
            <Routes>
              <Route path="/dashboard" element={<div>Dashboard</div>} />
              <Route path="/*" element={<Navigate to="/workflow" />} />
              <Route path="/" element={<Navigate to="/workflow" />} />

              <Route path="users" element={<Users />} />
              <Route path="users/:id" element={<EditUser />} />
              <Route path="workflow" element={<WorkFlow />} />
              <Route path="addworkflow" element={<AddWorkFlow />} />
              <Route path="editworkflow/:id" element={<EditWorkFlow />} />
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
      </UsersProvider>
    </BrowserRouter>
  );
}

export default App;
