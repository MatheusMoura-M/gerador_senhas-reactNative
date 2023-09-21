import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

import { AnimatePresence, MotiText, MotiView } from "moti";
import ModalClipboard from "../../../components/ModalClipboard";
import { handleCopyBoard } from "../../../utils";

export default function PasswordItem({ data, removePassword, handleModal }) {
  const [showValue, setShowValue] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  const handleModalVisible = () => {
    handleCopyBoard(data);

    setModalVisible(true);

    setTimeout(() => {
      setModalVisible(false);
    }, 700);
  };

  return (
    <Pressable
      style={styles.container}
      onPress={() => setShowValue(!showValue)}
    >
      <View style={styles.options}>
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

        <Ionicons
          name={showValue ? "eye" : "eye-off"}
          color={"#fff"}
          size={30}
          marginTop={5}
        />
      </View>

      <View style={styles.boxIcons}>
        <FontAwesome5
          name="copy"
          size={24}
          color="#fff"
          onPress={handleModalVisible}
        />

        <ModalClipboard modalVisible={modalVisible} />

        <MaterialIcons
          name={"delete"}
          color={"#fff"}
          size={30}
          onPress={removePassword}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0e0e0e",
    padding: 14,
    width: "94%",
    marginBottom: 14,
    marginHorizontal: 14,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    color: "#fff",
    fontSize: 16,
  },
  skeleton: {
    backgroundColor: "#dadada",
    width: 170,
    height: 20,
    borderRadius: 8,
  },
  options: {
    flexDirection: "row",
    width: "80%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  boxIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    marginTop: 5,
  },
});
