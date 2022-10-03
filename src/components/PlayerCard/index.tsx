import { ButtonIcon } from "@components/ButtonIcon";
import * as S from "./styles";
import React from "react";

type Props = {
  name: string;
  onRemove: () => void;
};

export function PlayerCard({ name, onRemove }: Props) {
  return (
    <S.Container>
      <S.Icon name="person" />
      <S.Name>{name}</S.Name>

      <ButtonIcon iconName="close" type="SECONDARY" onPress={onRemove} />
    </S.Container>
  );
}
