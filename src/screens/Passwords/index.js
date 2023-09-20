import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useStorage from "../../hooks/useStorage";
import { useIsFocused } from "@react-navigation/native";
import PasswordItem from "./components/passwordItem";
import { MotiView } from "moti";

export const Passwords = () => {
  const [listPasswords, setListPasswords] = useState([]);
  const { getItem, removeItem } = useStorage();
  const focused = useIsFocused();

  useEffect(() => {
    const loadPasswords = async () => {
      const passwords = await getItem("@pass");

      setListPasswords(passwords);
    };
    loadPasswords();
  }, [focused]);

  const handleDeletePassword = async (item) => {
    const passwords = await removeItem("@pass", item);

    setListPasswords(passwords);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {focused && (
        <MotiView
          style={{ flex: 1 }}
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 300 }}
        >
          <View style={styles.header}>
            <Text style={styles.title}>Minhas Senhas</Text>
          </View>

          <View style={styles.content}>
            <FlatList
              style={{ flex: 1, paddingTop: 14 }}
              data={listPasswords}
              keyExtractor={(item) => String(item)}
              renderItem={({ index, item }) =>
                index % 2 === 0 ? (
                  <MotiView
                    from={{ opacity: 0, translateX: -70 }}
                    animate={{ opacity: 1, translateX: 0 }}
                    transition={{ delay: 50, duration: 200, type: "timing" }}
                  >
                    <PasswordItem
                      data={item}
                      removePassword={() => handleDeletePassword(item)}
                    />
                  </MotiView>
                ) : (
                  <MotiView
                    from={{ opacity: 0, translateX: 70 }}
                    animate={{ opacity: 1, translateX: 0 }}
                    transition={{ delay: 50, duration: 200, type: "timing" }}
                  >
                    <PasswordItem
                      data={item}
                      removePassword={() => handleDeletePassword(item)}
                    />
                  </MotiView>
                )
              }
            />
          </View>
        </MotiView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#392de9",
    paddingTop: 58,
    paddingBottom: 14,
    paddingHorizontal: 14,
  },
  title: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    // paddingHorizontal: 14,
  },
});
