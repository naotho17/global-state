import { atom } from "recoil";

//  recoil使うとたったこれだけでグローバルなステート管理ができちゃう
export const userState = atom({
  key: "userState",
  default: { isAdmin: false }
});
