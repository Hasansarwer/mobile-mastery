import React, { ReactNode } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { colors, radius, spacing } from "../theme";

type Props = {
  children: ReactNode;
  style?: ViewStyle;
};

export default function Card({ children, style }: Props) {
  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.light.surface,
    borderColor: colors.light.border,
    borderWidth: 1,
    borderRadius: radius.lg,
    padding: spacing.lg,
  },
});
