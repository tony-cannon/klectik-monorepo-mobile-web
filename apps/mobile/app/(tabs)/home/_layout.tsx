import { Logo, NotificationsIcons } from '@native/components/sections/header';
import { Stack } from 'expo-router';

export default function Layout() {
    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />
            <Stack>
                <Stack.Screen
                    name="index"
                    options={{
                        headerTitle: () => <Logo />,
                        headerStyle: {
                            backgroundColor: 'black',
                        },
                        headerRight: () => <NotificationsIcons />,
                    }}
                />
            </Stack>
        </>
    );
}
