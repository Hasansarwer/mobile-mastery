import React, { ReactNode } from "react";
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";

type Props = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

export default function Row({ children, style }: Props) {
  return <View style={[styles.row, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});
