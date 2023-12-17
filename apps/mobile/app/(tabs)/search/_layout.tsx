import { Stack } from 'expo-router';

export const unstable_settings = {
  initialRouteName: 'index',
};

export default function Search() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Stack
        screenOptions={{
          headerStyle: {},
        }}
      >
        <Stack.Screen name='index' options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
