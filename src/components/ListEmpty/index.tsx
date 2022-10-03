import * as S from "./styles";
import React from "react";

type Props = {
  message: string;
};

export function ListEmpty({ message }: Props) {
  return (
    <S.Container>
      <S.Message>{message}</S.Message>
    </S.Container>
  );
}
