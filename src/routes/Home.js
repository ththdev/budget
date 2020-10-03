import { authService } from "fBase";
import React from "react";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();

  function logout() {
    authService.signOut();
    history.push("/");
  }

  return (
    <>
      <span>Home</span>
      <button onClick={logout}>Log out</button>
    </>
  );
}

export default Home;
