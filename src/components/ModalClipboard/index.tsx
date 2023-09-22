import { StyleSheet, Text, View } from "react-native";

type PropsModalClipboard = {
  modalVisible: boolean;
};

export default function ModalClipboard({ modalVisible }: PropsModalClipboard) {
  return (
    <View
      style={[styles.container, modalVisible ? styles.fadeIn : styles.fadeOut]}
    >
      <View style={styles.content}>
        <Text style={styles.title}>Copiada!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 13,
    top: -17,
    opacity: 0,
    transform: [{ scale: 0 }],
    transitionProperty: "opacity transform",
    transitionDuration: "0.5s",
  },
  fadeIn: {
    transform: [{ scale: 1 }],
    opacity: 1,
  },
  fadeOut: {
    transform: [{ scale: 0 }],
    opacity: 0,
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
