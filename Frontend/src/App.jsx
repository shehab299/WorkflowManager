import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Login/Login";
import Users from "./pages/Users/Users";
import EditUser from "./pages/EditUser/EditUser";
import WorkFlow from "./pages/WorkFlow/WorkFlow"
import AddWorkFlow from "./pages/AddWorkFlow/AddWorkFlow";
import EditWorkFlow from "./pages/EditWorkFlow/EditWorkFlow";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="login" element={<Login />} />
        <Route path="users" element={<Users />} />
        <Route path="users/:id" element={<EditUser />} />
        <Route path="workflow" element={<WorkFlow/>}/>
        <Route path="addworkflow" element= {<AddWorkFlow/>}/>
        <Route path="editworkflow/:id" element={<EditWorkFlow/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
