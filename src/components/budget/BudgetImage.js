import React from "react";
import styled from "styled-components";
import { Ri24HoursFill } from "react-icons/ri";

const BudgetImage = ({ photoURL }) => {
  return photoURL ? (
    <Image src={photoURL} />
  ) : (
    <DefaultImage>
      <Ri24HoursFill size={24} color="gray" />
    </DefaultImage>
  );
};

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const DefaultImage = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default BudgetImage;
