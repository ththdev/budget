import { authService } from "fBase";
import React, { useEffect } from "react";
import { observer, inject } from "mobx-react";
import styled from "styled-components";

const ProfileIcon = inject("testStore")(
  observer(({ testStore }) => {
    return <Image src={testStore.user.photoURL} />;
  })
);

const Image = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export default ProfileIcon;
