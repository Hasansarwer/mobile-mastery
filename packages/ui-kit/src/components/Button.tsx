import React from "react";
import { Pressable, Text, StyleSheet, ViewStyle, StyleProp, TextStyle, ActivityIndicator } from "react-native";
import { colors, radius, spacing } from "../theme";
import { Variant, Action, Size } from "../types/types";




type Props = {
  title: string;
  variant?: Variant;
  action?: Action;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  loading?: boolean;
  size?: Size;
  fullWidth?: boolean;
};

const actionColors: Record<Action, string> = {
  primary: colors.light.primary,
  secondary: colors.light.secondary,
  danger: colors.light.danger,
  success: colors.light.success,
  warning: colors.light.warning,
  info: colors.light.info,
};

const sizeStyles: Record<Size, ViewStyle> = {
  sm: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  md: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
  },
  lg: {
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xl,
  },
};

export default function Button({ 
    title, 
    onPress, 
    style, 
    textStyle, 
    variant = "solid", 
    action = "primary",
    size = "md",
    fullWidth = false,
    disabled = false,
    loading = false,
}: Props) {
    const actionColor = actionColors[action];
    const isDisabled = disabled || loading;

    const containerStyles: StyleProp<ViewStyle> = [
    styles.button,
    sizeStyles[size],
    fullWidth && { width: "100%" },
    variant === "outline" && styles.outline,
    variant === "outline" && { borderColor: actionColor },
    variant === "solid" && { backgroundColor: actionColor },
    (variant === "text" || variant === "link" ) && styles.textLikeButton,
    isDisabled && variant === "outline" && { borderColor: colors.light.muted },
    isDisabled && variant === "solid" && { backgroundColor: colors.light.muted },
    isDisabled && { borderColor: colors.light.muted, opacity: 0.6 },
    style,
    ];

    const labelStyles: StyleProp<TextStyle> = [
    styles.text,
    variant === "solid" ? { color: colors.light.surface } : { color: actionColor },
    variant === "link" && { textDecorationLine: "underline" },
    isDisabled &&
    (variant === "solid"
    ? { color: colors.light.surface }
    : { color: colors.light.muted }),

    textStyle,
  ];
  return (
    <Pressable 
        onPress={onPress}
        disabled={isDisabled}
        accessibilityRole="button"
        accessibilityState={{ disabled: isDisabled, busy: loading }}
        style={containerStyles}>
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === "solid" ? colors.light.surface : actionColor}
        />
      ) : (
        <Text style={labelStyles}>{title}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
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
  
});
