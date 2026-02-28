import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import {
  Screen,
  Heading,
  Input,
  Button,
  Card,
  AppText,
  Spacer,
  Row,
  spacing,
} from "@mobile-mastery/ui-kit";

type Task = {
  id: string;
  title: string;
  done: boolean;
};

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", title: "Build ui-kit", done: false },
    { id: "2", title: "Start todo app", done: true },
  ]);

  const addTask = () => {
    if (!task.trim()) return;

    setTasks((prev) => [
      { id: Date.now().toString(), title: task, done: false },
      ...prev,
    ]);
    setTask("");
  };

  return (
    <Screen>
      <View style={styles.container}>
        <Heading fontSize={"lg"}>To-Do App</Heading>
        <Spacer size="lg" />

        <Card>
          <Input
            label="New Task"
            placeholder="Enter a task"
            value={task}
            onChangeText={setTask}
          />
          <Spacer size="md" />
          <Button title="Add Task" onPress={addTask} fullWidth />
        </Card>

        <Spacer size="lg" />

        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card style={styles.taskCard}>
              <Row style={{ justifyContent: "space-between" }}>
                <AppText>{item.title}</AppText>
                <AppText>{item.done ? "Done" : "Pending"}</AppText>
              </Row>
            </Card>
          )}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
  },
  taskCard: {
    marginBottom: spacing.md,
  },
});
