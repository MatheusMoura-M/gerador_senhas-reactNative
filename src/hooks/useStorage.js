import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
  // Buscar os items do storage
  const getItem = async (key) => {
    try {
      const passwords = await AsyncStorage.getItem(key);

      return JSON.parse(passwords) || [];
    } catch (error) {
      console.log("ERROR AO BUSCAR", error);
      return [];
    }
  };

  // Salvar um item no storage
  const saveItem = async (key, value) => {
    try {
      let passwords = await getItem(key);

      passwords.push(value);

      await AsyncStorage.setItem(key, JSON.stringify(passwords));
    } catch (error) {
      console.log("ERROR AO SALVAR", error);
    }
  };

  // Remover um item do storage
  const removeItem = async (key, item) => {
    try {
      let passwords = await getItem(key);

      let updatedPasswords = passwords.filter((password) => {
        return password !== item;
      });

      await AsyncStorage.setItem(key, JSON.stringify(updatedPasswords));

      return updatedPasswords;
    } catch (error) {
      console.log("ERROR AO DELETAR", error);
    }
  };

  return { getItem, saveItem, removeItem };
};

export default useStorage;
