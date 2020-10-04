import React, { useState, useEffect } from "react";
import AppRouter from "components/Router";
import { authService } from "fBase";
import Layout from "components/base/Layout";
import { observer, inject } from "mobx-react";

const App = inject("testStore")(
  observer(({ testStore }) => {
    const [init, setInit] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      _init();
    }, []);

    function _init() {
      authService.onAuthStateChanged((user) => {
        if (user) {
          setIsLoggedIn(true);
          testStore.setUser({
            displayName: user.displayName,
            photoURL: user.photoURL,
          });
        } else {
          setIsLoggedIn(false);
        }
        setInit(true);
      });
    }

    return init ? (
      <Layout>
        <AppRouter isLoggedIn={isLoggedIn} />
        <footer>&copy; {new Date().getFullYear()} Budget</footer>
      </Layout>
    ) : (
      "Initializing..."
    );
  })
);

export default App;
