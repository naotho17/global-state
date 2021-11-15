import styled from "styled-components";

//Inputの共通なデザインを持つコンポーネント
export const Input = (props) => {
  // propsとしてplaceholderを受け取る。とりあえずデフォルトは””(空文字)に設定。
  const { placeholder = "" } = props;
  return <SInput type="text" placeholder={placeholder} />;
};

const SInput = styled.input`
  padding: 8px 16px;
  border: solid #ddd 1px;
  border-radius: 9999px;
  outline: none;
`;
