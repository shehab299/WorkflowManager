import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

function useLogin() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setIsAuthenticated } = useAuth();

  async function login({ email, password }) {
    setIsLoading(true);
    setError("");

    const res = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();

    console.log(data);

    if (!res.ok) {
      setError(data.message);
      setIsLoading(false);
    } else {
      localStorage.setItem("user", JSON.stringify(data));
      setIsAuthenticated(true);
    }
  }

  return { error, isLoading, login };
}

export default useLogin;
