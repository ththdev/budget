import { dbService } from "fBase";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BudgetImage from "./BudgetImage";
import BudgetInfo from "./BudgetInfo";

const Budget = () => {
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    getBudgets();
  }, []);

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
  return budgets.map((budget) => (
    <Container key={budget.id}>
      <BudgetImage />
      <BudgetInfo name={budget.name} price={budget.price} />
    </Container>
  ));
};

const Container = styled.div`
  display: flex;
  height: 60px;
  margin-bottom: 20px;
  background: #f6f7fc;
  border-radius: 5px;
  padding: 10px;
  align-items: center;
`;

export default Budget;
