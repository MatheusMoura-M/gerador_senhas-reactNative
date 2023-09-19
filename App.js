import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/routes";
import { View } from "react-native";

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
