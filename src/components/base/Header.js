import ProfileIcon from "components/profile/ProfileIcon";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <h1>나의 예산</h1>
      <Link to="/settings">
        <ProfileIcon />
      </Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Header;
