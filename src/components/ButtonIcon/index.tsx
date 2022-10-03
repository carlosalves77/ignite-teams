import React from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";
import { ButtonIconTypeStyleProps } from "./styles";

type Props = TouchableOpacityProps & {
  iconName: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyleProps;
};

export function ButtonIcon({ iconName, type = "PRIMARY", ...rest }: Props) {
  return (
    <S.Container>
      <S.Icon name={iconName} type={type} />
    </S.Container>
  );
}
