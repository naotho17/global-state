import React from "react";
import styled from "styled-components";
// import { UserContext } from "../../providers/UserProvider";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
// Recoilの中の値を参照する場合useRecoilStateをimport
import { useRecoilState } from "recoil";

import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { userState } from "../../store/userState";

// ダミーの配列を10個作ってる
const users = [...Array(10).keys()].map((val) => {
  return {
    id: val + 1,
    name: `なおちょ${val + 1}`,
    image: "https://source.unsplash.com/yihlaRCCvd4",
    email: "12345@example.com",
    phone: "090-1111-2222",
    company: {
      name: "テスト株式会社"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  // const { userInfo, setUserInfo } = useContext(UserContext);
  const [userInfo, setUserInfo] = useRecoilState(userState);

  const onclickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });

  return (
    <Scontainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onclickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </Scontainer>
  );
};

const Scontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  /* 以下のようにするといい感じにレスポンシブルなデザインになる */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
