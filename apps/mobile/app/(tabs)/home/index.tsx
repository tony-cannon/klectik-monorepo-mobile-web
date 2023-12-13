import { View, Text } from 'react-native';
import React from 'react';
import LogoNotificationHeader from '@native/components/headers/LogoNotificationHeader';
import { AppYStack } from '@klectik/ui/src';
import { Stack } from 'expo-router';

const Page = () => {
  return (
    <AppYStack>
      <Stack.Screen
        options={{
          header: () => <LogoNotificationHeader />,
        }}
      />
      <View style={{ flex: 1, backgroundColor: '#000' }}>
        <Text style={{ color: '#000' }}>The Home Page...</Text>
      </View>
    </AppYStack>
  );
};

export default Page;