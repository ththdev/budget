import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "routes/Home";
import Login from "routes/Login";
import NewBudget from "routes/NewBudget";
import Register from "routes/Register";

function AppRouter({ isLoggedIn }) {
  return (
    <Router>
      <Route exact path="/" component={isLoggedIn ? Home : Login} />
      <Route path="/register" component={Register} />
      <Route path="/new" component={NewBudget} />
    </Router>
  );
}

export default AppRouter;
