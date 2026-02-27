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

        <Button title="Solid Primary" variant="solid" action="primary" disabled={true} onPress={() => Alert.alert("Working")} />
        <Button title="Solid Secondary" variant="solid" action="secondary" onPress={() => Alert.alert("Working")} />
        <Button title="Solid Success" variant="solid" action="success" onPress={() => Alert.alert("Working")} />
        <Button title="Solid Danger" variant="solid" action="danger" onPress={() => Alert.alert("Working")} />
        <Button title="Solid Warning" variant="solid" action="warning" onPress={() => Alert.alert("Working")} />
        <Button title="Solid Info" variant="solid" action="info" onPress={() => Alert.alert("Working")} />
        <Button title="Outline Primary" variant="outline" action="primary" onPress={() => Alert.alert("Working")} />
        <Button title="Outline Secondary" variant="outline" action="secondary" onPress={() => Alert.alert("Working")} />
        <Button title="Outline Success" variant="outline" action="success" onPress={() => Alert.alert("Working")} />
        <Button title="Outline Danger" variant="outline" action="danger" onPress={() => Alert.alert("Working")} />
        <Button title="Outline Warning" variant="outline" action="warning" onPress={() => Alert.alert("Working")} />
        <Button title="Outline Info" variant="outline" action="info" onPress={() => Alert.alert("Working")} />
        <Button title="Text Primary" variant="text" action="primary" onPress={() => Alert.alert("Working")} />
        <Button title="Text Secondary" variant="text" action="secondary" onPress={() => Alert.alert("Working")} />
        <Button title="Link Primary" variant="link" action="primary" onPress={() => Alert.alert("Working")} />
        <Button title="Link Secondary" variant="link" action="secondary" onPress={() => Alert.alert("Working")} />
        <Button title="Link Success" variant="link" action="success" onPress={() => Alert.alert("Working")} />
        <Button title="Link Danger" variant="link" action="danger" onPress={() => Alert.alert("Working")} />
        <Button title="Link Warning" variant="link" action="warning" onPress={() => Alert.alert("Working")} />
        <Button title="Link Info" variant="link" action="info" onPress={() => Alert.alert("Working")} />


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
