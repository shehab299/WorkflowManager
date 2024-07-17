import { useAuth } from "../contexts/AuthContext";

function useLogout() {
  const { dispatch } = useAuth();

  function logout() {
    dispatch({ type: "logout" });
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }

  return { logout };
}

export default useLogout;
