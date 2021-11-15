import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondaryButton";

export const Top = () => {
  const history = useHistory();

  const onclickAdmin = () =>
    history.push({ pathname: "users", state: { isAdmin: true } });
  const onClickGeneral = () =>
    history.push({ pathname: "users", state: { isAdmin: false } });
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
