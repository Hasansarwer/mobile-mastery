import React, { ReactNode } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { colors } from "../theme";

type Props = {
  children: ReactNode;
};

export default function Screen({ children }: Props) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.light.background,
  },
});
