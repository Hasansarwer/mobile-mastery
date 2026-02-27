import React from "react";
import { TextInput, TextInputProps, StyleSheet } from "react-native";
import { colors, radius, spacing } from "../theme";

export default function Input(props: TextInputProps) {
  return (
    <TextInput
      placeholderTextColor={colors.light.muted}
      style={styles.input}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.light.surface,
    color: colors.light.text,
    borderColor: colors.light.border,
    borderWidth: 1,
    borderRadius: radius.md,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
  },
});
