import { Stack } from 'expo-router';

export default function Layout() {

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Stack
        screenOptions={{
          headerStyle: {},
        }}
      >
        <Stack.Screen name='index' options={{}} />
      </Stack>
    </>
  );
}