import { Flex } from '@klectik/ui/src/components/layout/Flex';
import { Text } from '@klectik/ui/src/components/text';
import { router } from 'expo-router';
import { Backspace } from 'phosphor-react-native';
import React from 'react';

import ButtonIcon from './PhosphorTouchableIcon';

type AppBackButtonWithTitleProps = {
    title: string;
};

const ButtonBack = ({ title }: AppBackButtonWithTitleProps) => {
    return (
        <Flex row>
            <ButtonIcon
                icon={Backspace}
                onPress={router.back}
                style={{ marginRight: 20 }}
            />
            <Text
                style={{
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 18,
                    marginTop: 4,
                }}
            >
                {title}
            </Text>
        </Flex>
    );
};

export default ButtonBack;
