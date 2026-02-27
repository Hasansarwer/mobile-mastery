import React from "react";
import { Pressable, Text, StyleSheet, ViewStyle } from "react-native";
import { colors, radius, spacing } from "../theme";

type Props = {
  title: string;
  variant?: "solid" | "outline" | "link";
  action?: "primary" | "secondary";
  onPress?: () => void;
  style?: ViewStyle;
};

export default function Button({ title, onPress, style, variant = "solid" }: Props) {
  return (
    <Pressable onPress={onPress} style={[styles.button, styles[variant], style]}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.light.primary,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.md,
    alignItems: "center",
  },
  solid: {
    backgroundColor: colors.light.primary,
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: colors.light.primary,
  },
    link: {
    backgroundColor: "transparent",
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  text: {
    color: "#fff",
    fontWeight: "600",
  },
});
