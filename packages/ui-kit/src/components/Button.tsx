import React from "react";
import { Pressable, Text, StyleSheet, ViewStyle, StyleProp, TextStyle } from "react-native";
import { colors, radius, spacing, Variant, Action } from "../theme";




type Props = {
  title: string;
  variant?: Variant;
  action?: Action;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

const actionColors: Record<Action, string> = {
  primary: colors.light.primary,
  secondary: colors.light.secondary,
  danger: colors.light.danger,
  success: colors.light.success,
  warning: colors.light.warning,
  info: colors.light.info,
};

export default function Button({ title, onPress, style, textStyle, variant = "solid", action = "primary" }: Props) {
    const actionColor = actionColors[action];
    const containerStyles: StyleProp<ViewStyle> = [
    styles.button,
    variant === "outline" && styles.outline,
    variant === "outline" && { borderColor: actionColor },
    variant === "solid" && { backgroundColor: actionColor },
    (variant === "text" || variant === "link" ) && styles.textLikeButton,
    style,
    ];

    const labelStyles: StyleProp<TextStyle> = [
    styles.text,
    variant === "solid" && { color: colors.light.surface },
    ( variant === "outline" || variant === "text" ) && { color: actionColor },
    variant === "link" && { color: "#0000FF", textDecorationLine: "underline" },
    textStyle,
  ];
  return (
    <Pressable onPress={onPress} style={containerStyles}>
      <Text style={labelStyles}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.md,
    alignItems: "center",
    justifyContent: "center",
  },
  outline: {
    borderWidth: 1,
    backgroundColor: "transparent",
  },
  textLikeButton: {
    backgroundColor: "transparent",
    paddingHorizontal : 0,
    paddingVertical: 0,
  },
  text: {
    fontWeight: "600",
  },
  solidText: {
    color: colors.light.surface,
  },
});
