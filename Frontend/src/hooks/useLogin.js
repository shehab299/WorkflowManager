import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { jwtDecode } from "jwt-decode";

function useLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuth();

  async function login({ email, password }) {
    setIsLoading(true);

    const res = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();

    if (!res.ok) {
      if (res.status === 401) {
        throw new Error("Unauthorized");
      }
      setIsLoading(false);
    } else {
      const token = data.token;

      const user = jwtDecode(token).user;
      console.log(user);

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);

      console.log(localStorage);

      dispatch({ type: "login", payload: user });
    }
  }

  return { isLoading, login };
}

export default useLogin;
