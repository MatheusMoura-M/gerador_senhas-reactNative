import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import Slider from "@react-native-community/slider";
import { useState } from "react";
import { MotiView } from "moti";
import ModalPassword from "../../components/ModalPassword";
import { BOLD } from "@utils/index";

const charset =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export const Home = () => {
  const [size, setSize] = useState<number>(10);
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const generatePassword = () => {
    let password = "";

    for (let i = 0, n = charset.length; i < size; i++) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }

    setPasswordValue(password);

    setModalVisible(true);
  };

  return (
    <MotiView
      style={styles.container}
      from={{ opacity: 0, translateX: -50, translateY: -50 }}
      animate={{ opacity: 1, translateX: 0, translateY: 0 }}
      transition={{ type: "timing", delay: 300, duration: 900 }}
    >
      <Image source={require("../../assets/logo.png")} style={styles.logo} />

      <Text style={styles.title}>{size} Caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{ minHeight: 60 }}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor={"#ff0000"}
          minimumTrackTintColor={"#000"}
          thumbTintColor={"#392de9"}
          value={size}
          onValueChange={(value) => setSize(Number(value.toFixed(0)))}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <ModalPassword
          password={passwordValue}
          handleClose={() => setModalVisible(false)}
        />
      </Modal>
    </MotiView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3FF",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    marginBottom: 60,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  area: {
    width: "80%",
    padding: 6,
    borderRadius: 8,
    marginVertical: 14,
    backgroundColor: "#FFF",
  },
  button: {
    width: "80%",
    height: 50,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 18,
    backgroundColor: "#392de9",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 20,
    fontFamily: BOLD,
  },
});
