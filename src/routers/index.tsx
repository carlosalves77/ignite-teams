import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { useTheme } from "styled-components/native";
import { AppRouters } from "./app.routes";

export function Routes() {
  const { COLORS } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.GRAY_600 }}>
      <NavigationContainer>
        <AppRouters />
      </NavigationContainer>
    </View>
  );
}
