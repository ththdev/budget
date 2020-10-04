import React from "react";
import styled from "styled-components";
import BaseLayout from "./BaseLayout";
import Header from "./Header";
import Toolbar from "./Toolbar";

function HomeLayout(props) {
  return (
    <BaseLayout>
      <Header />
      {props.children}
      <Toolbar />
    </BaseLayout>
  );
}

export default HomeLayout;
