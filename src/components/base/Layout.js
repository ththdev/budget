import React from "react";
import styled from "styled-components";
import Header from "./Header";

function Layout(props) {
  return (
    <Container>
      <Box>
        <Header />
        {props.children}
      </Box>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Box = styled.div`
  width: 375px;
`;

export default Layout;
