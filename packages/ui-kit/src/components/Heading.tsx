import React from "react";
import { Text, TextProps, StyleSheet } from "react-native";
import { colors, typography } from "../theme";

type Level = 1 | 2 | 3 | 4;

type Props = TextProps & {
  level?: Level;
};

const fontSizes = {
  1: typography.xxl,
  2: typography.xl,
  3: typography.lg,
  4: typography.md,
};

export default function Heading({ level = 2, style, ...props }: Props) {
  return (
    <Text
      style={[styles.base, { fontSize: fontSizes[level] }, style]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  base: {
    color: colors.light.text,
    fontWeight: "700",
  },
});
