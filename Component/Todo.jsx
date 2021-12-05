import React, { useState } from "react";
import {
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import AddTodo from "./AddTodo";
import Header from "./Header";
import TodoLists from "./TodoLists";

function Todo() {
  const [Todos, setTodos] = useState([{ text: "hello todo", key: 1 }]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => prevTodos.filter((index) => index.key != key));
  };

  const submit = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("Oops!", "Todos must be over 3 chars long", [
        { text: "Understood", onPress: () => console.log("aleert closed") },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        // console.log('keyboard dismiss');
      }}
    >
      <View>
        <Header />
        <View style={{ marginHorizontal: 25 }}>
          <AddTodo submit={submit} />
        </View>
        <View style={{ marginHorizontal: 25 }}>
          <FlatList
            data={Todos}
            renderItem={({ item }) => (
              <TodoLists item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Todo;
