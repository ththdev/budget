import { authService, firebaseInstance } from "fBase";
import React from "react";

function GoogleLogin() {
  async function googleLogin(event) {
    let provider = new firebaseInstance.auth.GoogleAuthProvider();
    const data = await authService.signInWithPopup(provider);
    console.log(data);
  }
  return <button onClick={googleLogin}>Continue with Google</button>;
}

export default GoogleLogin;
