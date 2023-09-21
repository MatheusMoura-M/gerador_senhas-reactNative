import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ModalClipboard({ modalVisible }) {
  return (
    modalVisible && (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Copiada!</Text>
        </View>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 13,
    top: -17,
  },
  content: {
    backgroundColor: "#fff",
    width: 65,
    paddingVertical: 1,
    borderBottomEndRadius: 6,
    borderTopEndRadius: 6,
    borderTopLeftRadius: 6,
  },
  title: {
    textAlign: "center",
    color: "#000",
  },
});
