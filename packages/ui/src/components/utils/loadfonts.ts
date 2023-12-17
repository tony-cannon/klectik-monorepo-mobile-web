import * as Font from "expo-font";

const fonts = {
  "Inter-Regular": require("@klectik/ui/src/assets/fonts/Inter-Regular.ttf"),
  // eslint-disable-next-line prettier/prettier
  "Gojacky": require("@klectik/ui/src/assets/fonts/Gojacky.ttf"),
};

const loadFonts = async () => {
  await Font.loadAsync(fonts);
};

export default loadFonts;
