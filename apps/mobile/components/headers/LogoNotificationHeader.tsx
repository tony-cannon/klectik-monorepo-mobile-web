import { Flex } from "@klectik/ui/src/components/layout/Flex";
import { Text } from "@klectik/ui/src/components/text";
import { Link } from "expo-router";
import { BellRinging, ChatCircleText } from "phosphor-react-native";

import ButtonIcon from "../button/ButtonIcon";

const LogoNotificationHeader = () => {
  return (
    <Flex row justified height={50} marginHorizontal={20}>
      <Text color="$black" variant="logo">
        Klectik
      </Text>
      <Flex row>
        <Link href={"/(aux)/notifications"}>
          <ButtonIcon icon={BellRinging} style={{ marginRight: 20 }} />
        </Link>
        <Link href={"/(aux)/messages"}>
          <ButtonIcon icon={ChatCircleText} />
        </Link>
      </Flex>
    </Flex>
  );
};

export default LogoNotificationHeader;
