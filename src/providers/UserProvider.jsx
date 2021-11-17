import React, { createContext } from "react";

// ほかの画面でコンテキストの値を使えるようにexportしとく
export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;
  const contextName = "なおちょ";
  return (
    // グローバルで参照出来る値を下のvalueのとこに渡しておく
    <UserContext.Provider value={{ contextName }}>
      {children}
    </UserContext.Provider>
  );
};
