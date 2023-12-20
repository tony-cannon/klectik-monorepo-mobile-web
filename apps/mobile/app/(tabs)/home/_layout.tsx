import { Stack } from 'expo-router';
import { Logo } from '@native/components/sections/header';
import { NotificationsIcons } from '@native/components/sections/header/NotificationsIcons';

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
