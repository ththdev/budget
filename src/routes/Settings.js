import BaseLayout from "components/base/BaseLayout";
import ProfileIcon from "components/profile/ProfileIcon";
import { authService } from "fBase";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import userState from "stores/UserState";
import styled from "styled-components";

const Settings = () => {
  const history = useHistory();
  const [user, setUser] = useRecoilState(userState);

  function logout() {
    authService.signOut();
    history.push("/");
  }

  return (
    <BaseLayout>
      <Header>
        <span></span>
        <span>설정</span>
        <span className="doneBtn" onClick={() => history.goBack()}>
          완료
        </span>
      </Header>
      <Profile>
        <ProfileIcon size={40} />
        <div>
          <span className="displayName">{user.displayName}</span>
          <span className="email">{user.email}</span>
          <Link to="/">프로필 수정</Link>
        </div>
      </Profile>
      <SettingItem className="logout" onClick={logout}>
        로그아웃
      </SettingItem>
    </BaseLayout>
  );
};

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  span.doneBtn {
    cursor: pointer;
  }
`;

const Profile = styled.div`
  display: flex;
  padding: 10px 0;
  & > div {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    font-size: 14px;

    a {
      color: rgb(0, 122, 255);
    }
    span.displayName {
      font-weight: 500;
    }
    span.email {
      margin-bottom: 10px;
    }
  }
`;

const SettingItem = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  cursor: pointer;

  &.logout {
    color: red;
  }
`;

export default Settings;
