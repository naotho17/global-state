import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
// set関数だけを使用する場合はuseSetRecoilState
import { useSetRecoilState } from "recoil";

import { SecondaryButton } from "../atoms/button/SecondaryButton";
// import { UserContext } from "../../providers/UserProvider";
import { userState } from "../../store/userState";

export const Top = () => {
  const history = useHistory();
  // const { setUserInfo } = useContext(UserContext);
  const setUserInfo = useSetRecoilState(userState);

  const onclickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push("/users");
  };

  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push("/users");
  };

  return (
    <Scontainer>
      <h2>TOPページです</h2>
      <SecondaryButton onClick={onclickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </Scontainer>
  );
};

const Scontainer = styled.div`
  text-align: center;
`;
