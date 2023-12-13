import FontAwesome from '@expo/vector-icons/FontAwesome';
import Providers from '@utilities/Providers';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

const App = () => {
  const [loaded, error] = useFonts({
    LogoScript: require('@klectik/ui/src/assets/fonts/Gojacky.ttf'),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <InnerApp />;
};

const InnerApp = () => {
  return (
    <Providers>
      <BottomSheetModalProvider>
        <Stack>
          <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
          <Stack.Screen name='modal' options={{ presentation: 'modal' }} />
        </Stack>
      </BottomSheetModalProvider>
      
    </Providers>
  );
};

function getApp() {
  //return __DEV__ ? App : Sentry.wrap(App)
  return App;
}

export default getApp();
