import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RiAddCircleFill } from "react-icons/ri";

const Toolbar = () => {
  return (
    <Container>
      <Link to="/">
        <RiAddCircleFill size={24} style={{ marginRight: 10 }} />
        새로운 예산 추가
      </Link>
      <Link to="/">그룹 추가</Link>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  width: 100%;
  max-width: 335px;
  bottom: 0;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #228be6;
  line-height: 60px;

  & > a {
    display: flex;
    align-items: center;
  }
`;

export default Toolbar;
