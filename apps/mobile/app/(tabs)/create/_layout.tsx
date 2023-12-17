import { Stack } from 'expo-router';

export const unstable_settings = {
  initialRouteName: '/index',
};

export default function Layout() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Stack
        screenOptions={{
          headerStyle: {},
        }}
      >
        <Stack.Screen
          name='index'
          options={{ headerShown: false, presentation: 'modal' }}
        />
      </Stack>
    </>
  );
}
