import { Flex } from '@klectik/ui/src/components/layout/Flex';
import { Text } from '@klectik/ui/src/components/text';

export const Logo = () => {
    return (
        <Flex row justified height={50} marginHorizontal={10}>
            <Text color="$white" variant="logo">
                Klectik
            </Text>
        </Flex>
    );
};
