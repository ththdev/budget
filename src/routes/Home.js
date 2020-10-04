import { authService, dbService } from "fBase";
import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";

function Home() {
  const [budgets, setBudgets] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getBudgets();
  }, []);

  function logout() {
    authService.signOut();
    history.push("/");
  }

  async function getBudgets() {
    const dbBugets = await dbService.collection("budgets").get();
    dbBugets.forEach((budget) => {
      const budgetObject = {
        ...budget.data(),
        id: budget.id,
      };
      setBudgets((prev) => [budgetObject, ...prev]);
    });
  }

  return (
    <>
      <span>Home</span>
      <button onClick={logout}>Log out</button>
      <Link to="/new">New Budget</Link>
      <div>
        {budgets.map((budget) => (
          <div key={budget.id}>
            <div>{budget.name}</div>
            <div>{budget.price}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
