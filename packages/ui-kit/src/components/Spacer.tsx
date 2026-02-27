import React from "react";
import { View } from "react-native";
import { spacing } from "../theme";

type SpacerSize = keyof typeof spacing;

type Props = {
  size?: SpacerSize;
  horizontal?: boolean;
};

export default function Spacer({ size = "md", horizontal = false }: Props) {
  return (
    <View
      style={horizontal ? { width: spacing[size] } : { height: spacing[size] }}
    />
  );
}
