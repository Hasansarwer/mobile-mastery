import React, { ReactNode } from "react";
import { StyleSheet } from "react-native";
import { colors } from "../theme";
import { SafeAreaView  } from "react-native-safe-area-context";

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
