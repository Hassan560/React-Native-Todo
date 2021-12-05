import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

function TodoLists({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.lists}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  lists: {
    padding: 16,
    borderWidth: 1,
    backgroundColor: "#efefef",
    borderStyle: "dashed",
    marginTop: 15,
    borderRadius: 10,
  },
});
export default TodoLists;
