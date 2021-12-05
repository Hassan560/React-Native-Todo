import React, { useState } from "react";
import { TextInput, Button, StyleSheet } from "react-native";

function AddTodo({ submit }) {
  const [Text, setText] = useState("");

  const changHandler = (e) => {
    setText(e);
  };

  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="Enter Text..."
        onChangeText={changHandler}
      />
      <Button color='coral' title="Add Todo" onPress={() => submit(Text)} />
    </>
  );
}
const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#d3d3d3",
  },
});
export default AddTodo;
