import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Login/Login";
import Users from "./pages/Users/Users";
import EditUser from "./pages/EditUser/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="login" element={<Login />} />
        <Route path="users" element={<Users />} />
        <Route path="users/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
