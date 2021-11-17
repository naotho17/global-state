import React, { createContext, useState } from "react";

// ほかの画面でコンテキストの値を使えるようにexportしとく
export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;
  const [userInfo, setUserInfo] = useState(null);

  return (
    // グローバルで参照出来る値を下のvalueのとこに渡しておく
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
