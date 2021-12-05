import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>My Todos</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 35,
    backgroundColor: "coral",
    marginBottom: 25
    // alignItems: 'center',
    // textAlign: 'center',
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});

export default Header;
