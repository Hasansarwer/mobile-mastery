import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import {
  Screen,
  Heading,
  AppText,
  Button,
  Card,
  Input,
  Spacer,
  Row,
  Column,
  spacing,
} from "@mobile-mastery/ui-kit";

export default function App() {
  return (
    <Screen>
      <View style={styles.container}>
        <Heading fontSize="xxl">Starter Preview</Heading>
        <Spacer size="xxl" />
        <AppText>Day 2 ui-kit preview screen</AppText>

        <Spacer size="lg" />

        <Card>
          <Heading fontSize="lg">Buttons</Heading>
          <Spacer size="md" />
          <Button title="Primary" loading={false} disabled={false} onPress={() => Alert.alert("Primary")} />
          <Spacer size="sm" />
          <Button title="Secondary" action="secondary" loading={false} disabled={true} />
          <Spacer size="sm" />
          <Button title="Outline" variant="outline" loading={false} disabled={true}/>
          <Spacer size="sm" />
          <Button title="Link Button" variant="link" loading={true} disabled={true}/>
        </Card>

        <Spacer size="lg" />

        <Card>
          <Heading fontSize="lg">Input</Heading>
          <Spacer size="md" />
          <Input label="Task title" placeholder="Enter task..." editable={false} />
        </Card>

        <Spacer size="lg" />

        <Card>        
          <Heading fontSize="lg">Layout</Heading>
          <Spacer size="md" />
          <Row style={{ justifyContent: "space-between" }}>
            <AppText>Left</AppText>
            <AppText>Right</AppText>
          </Row>
          <Spacer size="md" />
          <Column>
            <AppText>Item 1</AppText>
            <AppText>Item 2</AppText>
          </Column>
        </Card>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
  },
});
