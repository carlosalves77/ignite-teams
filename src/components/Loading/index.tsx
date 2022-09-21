import * as React from "react";
import * as S from "./styles";

const Loading: React.FC = () => {
  return (
    <S.Container>
      <S.LoadIndicator />
    </S.Container>
  );
};

export default Loading;
