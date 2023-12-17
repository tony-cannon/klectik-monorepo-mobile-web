import { Flex } from "@klectik/ui/src/components/layout/Flex";
import { Text } from "@klectik/ui/src/components/text";
import Screen from "@native/components/Screen";
import { Stack } from "expo-router";

const Page = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Screen showLogoNotification={true}>
        <Flex padded>
          <Text color="$pink200">Notifications</Text>
        </Flex>
      </Screen>
    </>
  );
};

export default Page;
