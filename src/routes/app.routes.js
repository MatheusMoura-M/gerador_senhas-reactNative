import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "@screens/Home";
import { Passwords } from "@screens/Passwords";

import { Ionicons } from "@expo/vector-icons";
import { MotiView } from "moti";

const { Navigator, Screen } = createBottomTabNavigator();

export const AppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return (
                <MotiView
                  from={{ opacity: 0, translateX: -20, rotateY: "-100deg" }}
                  animate={{ opacity: 1, translateX: 0, rotateY: "0deg" }}
                  transition={{ type: "timing", delay: 300, duration: 900 }}
                >
                  <Ionicons size={size} color={color} name="home" />
                </MotiView>
              );
            }
            return <Ionicons size={size} color={color} name="home-outline" />;
          },
        }}
      />
      <Screen
        name="passwords"
        component={Passwords}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons size={size} color={color} name="lock-closed" />;
            }
            return (
              <MotiView
                from={{ opacity: 0, translateX: -20, rotateY: "-100deg" }}
                animate={{ opacity: 1, translateX: 0, rotateY: "0deg" }}
                transition={{ type: "timing", delay: 300, duration: 900 }}
              >
                <Ionicons
                  size={size}
                  color={color}
                  name="lock-closed-outline"
                />
              </MotiView>
            );
          },
        }}
      />
    </Navigator>
  );
};
