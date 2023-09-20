import React from "react";
import { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { AnimatePresence, MotiText, MotiView } from "moti";

export default function PasswordItem({ data, removePassword }) {
  const [showValue, setShowValue] = useState();

  return (
    <Pressable
      style={styles.container}
      onLongPress={removePassword}
      onPress={() => setShowValue(!showValue)}
    >
      {showValue ? (
        <AnimatePresence exitBeforeEnter>
          <MotiText
            style={styles.text}
            from={{ opacity: 0, translateX: 8 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ delay: 50, duration: 300, type: "timing" }}
          >
            {data}
          </MotiText>
        </AnimatePresence>
      ) : (
        <AnimatePresence exitBeforeEnter>
          <MotiView
            style={styles.skeleton}
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "timing" }}
          />
        </AnimatePresence>
      )}
      <Ionicons name={showValue ? "eye" : "eye-off"} color={"#fff"} size={22} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0e0e0e",
    padding: 14,
    width: "93%",
    marginBottom: 14,
    marginHorizontal: 15,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    color: "#fff",
  },
  skeleton: {
    backgroundColor: "#dadada",
    width: 170,
    height: 20,
    borderRadius: 8,
  },
});
