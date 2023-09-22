import React from "react";
import { ActivityIndicator, View } from "react-native";

type PropsLoading = {
  color: string;
};

export const LoadIndicator = ({ color }: PropsLoading) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator color={color} size={"large"}></ActivityIndicator>
    </View>
  );
};
