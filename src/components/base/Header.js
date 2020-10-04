import ProfileIcon from "components/profile/ProfileIcon";
import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <div>Hello</div>
      <ProfileIcon />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Header;
