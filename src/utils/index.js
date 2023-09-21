import * as Clipboard from "expo-clipboard";

const handleCopyBoard = async (data) => {
  await Clipboard.setStringAsync(data);
};

export { handleCopyBoard };
