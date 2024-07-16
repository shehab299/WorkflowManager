import { useAuth } from "../contexts/AuthContext";

function useLogout() {
  const { setIsAuthenticated } = useAuth();

  function logout() {
    console.log("logout");
    setIsAuthenticated(false);
  }

  return { logout };
}

export default useLogout;
