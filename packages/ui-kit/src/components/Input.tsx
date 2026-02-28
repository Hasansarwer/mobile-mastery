import React from "react";
import { 
    TextInput, 
    TextInputProps, 
    StyleSheet,
    View,
    Text,
    StyleProp,
    ViewStyle, 
} from "react-native";
import { colors, radius, spacing } from "../theme";
import { Size } from "../types/types";

type Props = TextInputProps & {
    label?: string;
    error?: string;
    size?: Size;
    fullWidth?: boolean;
    containerStyle?: StyleProp<ViewStyle>;
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

export default function Input({
  label,
  error,
  size = "md",
  fullWidth = true,
  containerStyle,
  style,
  editable = true,
  ...props
}: Props) {
  return (
    <View style={[fullWidth && styles.fullWidth, containerStyle]}>
         {label ? <Text style={styles.label}>{label}</Text> : null}
        <TextInput
          editable={editable}
          placeholderTextColor={colors.light.muted}
          style={[
          styles.input,
          sizeStyles[size],
          !editable && styles.disabledInput,
          error && styles.errorInput,
          style,
        ]}
        {...props}
      />

      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  fullWidth: {
    width: "100%",
  },
  label: {
    marginBottom: spacing.sm,
    color: colors.light.text,
    fontWeight: "600",
  },
  input: {
    backgroundColor: colors.light.surface,
    color: colors.light.text,
    borderColor: colors.light.border,
    borderWidth: 1,
    borderRadius: radius.md,
  },
  disabledInput: {
    backgroundColor: "#f1f5f9",
    opacity: 0.7,
  },
  errorInput: {
    borderColor: colors.light.danger,
  },
  errorText: {
    marginTop: spacing.xs,
    color: colors.light.danger,
    fontSize: 12,
  },
});
