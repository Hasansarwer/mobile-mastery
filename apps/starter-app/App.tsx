import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import {
  Screen,
  AppText,
  Button,
  Card,
  Input,
  spacing,
} from "@mobile-mastery/ui-kit";

export default function App() {
  return (
    <Screen>
      <View style={styles.container}>
        <AppText size="xl" style={styles.title}>
          Starter App
        </AppText>

        <AppText style={styles.subtitle}>
          Day 1 design system preview
        </AppText>

        <Card style={styles.card}>
          <AppText style={styles.cardText}>
            This card comes from the shared ui-kit package.
          </AppText>
        </Card>

        <Input placeholder="Type something..." />

        <View style={styles.space} />

        <Button title="Press Me" onPress={() => Alert.alert("Working")} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
    justifyContent: "center",
  },
  title: {
    marginBottom: spacing.sm,
    fontWeight: "700",
  },
  subtitle: {
    marginBottom: spacing.lg,
  },
  card: {
    marginBottom: spacing.lg,
  },
  cardText: {
    lineHeight: 22,
  },
  space: {
    height: spacing.lg,
  },
});
