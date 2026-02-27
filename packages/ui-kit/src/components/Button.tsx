import React from "react";
import { Pressable, Text, StyleSheet, ViewStyle } from "react-native";
import { colors, radius, spacing } from "../theme";

type Props = {
  title: string;
  onPress?: () => void;
  style?: ViewStyle;
};

export default function Button({ title, onPress, style }: Props) {
  return (
    <Pressable onPress={onPress} style={[styles.button, style]}>
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
  text: {
    color: "#fff",
    fontWeight: "600",
  },
});
