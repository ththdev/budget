import React from "react";
import styled from "styled-components";

const BaseLayout = (props) => {
  return (
    <Container>
      <Screen>{props.children}</Screen>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Screen = styled.div`
  width: 375px;
  padding: 0 20px;
`;

export default BaseLayout;
