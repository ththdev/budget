import { authService } from "fBase";
import React, { useEffect } from "react";
import { observer, inject } from "mobx-react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import userState from "stores/UserState";

const ProfileIcon = ({ size }) => {
  const [user, setUser] = useRecoilState(userState);
  return <Image src={user.photoURL} size={size} />;
};

const Image = styled.img`
  width: ${(props) => (props.size ? props.size : 30)}px;
  height: ${(props) => (props.size ? props.size : 30)}px;
  border-radius: 50%;
`;

export default ProfileIcon;
