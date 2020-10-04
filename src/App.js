import React, { useState, useEffect } from "react";
import AppRouter from "components/Router";
import { authService } from "fBase";
import { observer, inject } from "mobx-react";
import { useRecoilState } from "recoil";
import userState from "stores/UserState";

const App = inject("testStore")(
  observer(({ testStore }) => {
    const [init, setInit] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useRecoilState(userState);

    useEffect(() => {
      _init();
    }, []);

    function _init() {
      authService.onAuthStateChanged((user) => {
        if (user) {
          setIsLoggedIn(true);
          setUser({
            displayName: user.displayName,
            photoURL: user.photoURL,
            email: user.email,
            uid: user.uid,
          });
        } else {
          setIsLoggedIn(false);
        }
        setInit(true);
      });
    }

    return init ? (
      <>
        <AppRouter isLoggedIn={isLoggedIn} />
      </>
    ) : (
      "Initializing..."
    );
  })
);

export default App;
