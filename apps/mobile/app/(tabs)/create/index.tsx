import { Text } from "@klectik/ui/src/components/text";
import Screen from "@native/components/Screen";

const Page = () => {
  return (
    <Screen showLogoNotification={true}>
      <Text color="$pink200">Hello World</Text>
    </Screen>
  );
};

export default Page;
