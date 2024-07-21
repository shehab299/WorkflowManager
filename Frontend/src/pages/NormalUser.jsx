import React from "react";
import useLogout from "../hooks/useLogout";
import Button from "../components/Button/Button";

export default function NormalUser() {
  const { logout } = useLogout();
  return (
    <>
      <h1>JUST A NORMAL USER WITH NO AUTHORITIES or functionalities yet😔</h1>
      <Button theme="dark" onClick={logout}>logout</Button>
    </>
  );
}
