import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import useLogin from "./useLogin";

function useSignup() {
  const { login } = useLogin();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function signup({ name, email, password }) {
    setIsLoading(true);
    setError("");

    const res = await fetch("http://localhost:3000/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();

    console.log(data);

    if (!res.ok) {
      setError(data.message);
      setIsLoading(false);
    } else {
      await login({ email, password });
    }
  }

  return { error, isLoading, signup, setError };
}

export default useSignup;
