import React from "react";
import { Text, TextProps, StyleSheet } from "react-native";
import { colors, fontSizes } from "../theme";


type Props = TextProps & {
  fontSize?: keyof typeof fontSizes;
};



export default function Heading({ fontSize = "xl", style, ...props }: Props) {
  return (
    <Text
      style={[styles.base, { fontSize: fontSizes[fontSize] }, style]}
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
