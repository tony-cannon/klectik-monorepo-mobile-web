import { Flex } from '@klectik/ui/src/components/layout/Flex';
import { Link } from 'expo-router';
import PhosphorTouchableIcon from '@native/components/common/button/PhosphorTouchableIcon';
import { BellRinging, ChatCircleText } from 'phosphor-react-native';

export const NotificationsIcons = () => {
    return (
        <Flex row marginHorizontal={10} marginTop={10}>
            <Link href={'/(aux)/notifications'}>
                <PhosphorTouchableIcon
                    icon={BellRinging}
                    color={'#fff'}
                    IconWeight="thin"
                />
            </Link>
            <Link href={'/(aux)/messages'} style={{ marginLeft: 10 }}>
                <PhosphorTouchableIcon
                    icon={ChatCircleText}
                    color={'#fff'}
                    IconWeight="thin"
                />
            </Link>
        </Flex>
    );
};
