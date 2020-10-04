import React from "react";
import styled from "styled-components";

const BudgetInfo = ({ name, price }) => {
  return (
    <Container>
      <Name>{name}</Name>
      <Price>{price}원</Price>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const Name = styled.div`
  font-size: 16px;
`;
const Price = styled.div`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
`;

export default BudgetInfo;
