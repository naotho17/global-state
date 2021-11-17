import React, { memo } from "react";
import styled from "styled-components";
// グローバルなstateの値を参照することだけしかしない場合は”useRecoilValue”
import { useRecoilValue } from "recoil";

// import { UserContext } from "../../../providers/UserProvider";
import { userState } from "../../../store/userState";

export const UserIconWithName = memo((props) => {
  const { image, name } = props;
  // const { userInfo } = useContext(UserContext);
  const userInfo = useRecoilValue(userState);

  // userInfoがtrueのときは"userInfo.isAdmin"という値にする。
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <SContainer>
      <SImage height={160} width={160} src={image} alt={name} />
      <Sname>{name}</Sname>
      {/* isAdminがtrueだったら以下の画面がでてくる */}
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
});

const SContainer = styled.div`
  text-align: center;
`;

const SImage = styled.img`
  border-radius: 50%;
`;

const Sname = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
