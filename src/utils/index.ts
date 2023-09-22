import * as Clipboard from "expo-clipboard";

const handleCopyBoard = async (data: string) => {
  await Clipboard.setStringAsync(data);
};

const REGULAR = "NunitoSans_400Regular";
const BOLD = "NunitoSans_700Bold";

export { handleCopyBoard, REGULAR, BOLD };
