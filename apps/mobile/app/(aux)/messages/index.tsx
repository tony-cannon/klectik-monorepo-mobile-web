import { Flex } from "@klectik/ui/src/components/layout/Flex";
import { Text } from "@klectik/ui/src/components/text";
import Screen from "@native/components/Screen";
import ButtonBack from "@native/components/button/ButtonBack";
import { Stack } from "expo-router";

const Page = () => {
  return (
    <Screen showLogoNotification={false}>
      <Flex padded>
        <Stack.Screen options={{ headerShown: false }} />
        <Screen showLogoNotification={true}>
          <ButtonBack title="Messages" />
          <Text color="$pink200">Messages</Text>
        </Screen>
      </Flex>
    </Screen>
  );
};

export default Page;
