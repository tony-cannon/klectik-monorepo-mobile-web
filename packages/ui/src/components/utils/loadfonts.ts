import * as Font from 'expo-font';

const fonts = {
    'Inter-Regular': require('@klectik/ui/src/assets/fonts/Inter-Regular.ttf'),
    Gojacky: require('@klectik/ui/src/assets/fonts/Gojacky.ttf'),
    baselMedium: require('@klectik/ui/src/assets/fonts/Basel-Medium.ttf'),
    baselBook: require('@klectik/ui/src/assets/fonts/Basel-Book.ttf'),
};

const loadFonts = async () => {
    await Font.loadAsync(fonts);
};

export default loadFonts;
