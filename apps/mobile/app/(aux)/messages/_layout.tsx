import { Stack } from "expo-router";

export const unstable_settings = {
  initialRouteName: "index",
};

const Layout = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};
export default Layout;
