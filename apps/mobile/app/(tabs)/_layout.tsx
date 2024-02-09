import PhosphorTouchableIcon from '@native/components/common/button/PhosphorTouchableIcon';
import { ModalRef } from '@native/components/layout/BottomSheetModal';
import { Tabs } from 'expo-router';
import {
    HeartHalf,
    House,
    MagnifyingGlass,
    PlusCircle,
    UserSquare,
} from 'phosphor-react-native';
import { useRef, useState } from 'react';
import { Platform, View } from 'react-native';
//import { Text } from '@klectik/ui/src/components/text/Text';
import SignInModal from '@native/components/modal/SignInModal';
import { colors } from '@theme/color/colors';
import { useAuth } from '@utilities/contexts/AuthContext';

const BottomTabNavigation = () => {
    const { user } = useAuth();
    console.log('User is... ', user);
    const loginModalRef = useRef<ModalRef>(null);
    const [redirect, setRedirect] = useState<string | boolean>(false);
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarHideOnKeyboard: true,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: colors.black,
                        borderTopWidth: 0,
                    },
                }}
            >
                <Tabs.Screen
                    name="home"
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: () => (
                            <PhosphorTouchableIcon
                                icon={House}
                                color={colors.white}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="search"
                    options={{
                        tabBarLabel: 'Search',
                        tabBarIcon: () => (
                            <PhosphorTouchableIcon
                                icon={MagnifyingGlass}
                                color={colors.white}
                            />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="create"
                    options={{
                        tabBarIcon: () => {
                            return (
                                <View
                                    style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: colors.lime300,
                                        width: Platform.OS === 'ios' ? 50 : 60,
                                        height: Platform.OS === 'ios' ? 50 : 60,
                                        top: Platform.OS === 'ios' ? -10 : -20,
                                        borderRadius:
                                            Platform.OS === 'ios' ? 25 : 30,
                                    }}
                                >
                                    <PlusCircle color={colors.white} />
                                </View>
                            );
                        },
                    }}
                    listeners={() => ({
                        tabPress: (e) => {
                            if (!user) {
                                e.preventDefault();
                                setRedirect('(tabs)/home');
                                loginModalRef.current?.present();
                            }
                            // e.preventDefault();
                            // setRedirect('(tabs)/home');
                            // loginModalRef.current?.present();
                        },
                    })}
                />

                <Tabs.Screen
                    name="add"
                    options={{
                        tabBarLabel: 'Add',
                        tabBarIcon: () => (
                            <PhosphorTouchableIcon
                                icon={HeartHalf}
                                color={colors.white}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        tabBarShowLabel: false,
                        tabBarIcon: () => (
                            <PhosphorTouchableIcon
                                icon={UserSquare}
                                color={colors.white}
                            />
                        ),
                    }}
                    // listeners={({ navigation }) => ({
                    //   tabPress: (e) => {
                    //     if (user === null) {
                    //       setRedirect('(tabs)/profile');
                    //       setOpenAuthBottomSheet(true);
                    //       e.preventDefault();
                    //     }
                    //   },
                    // })}
                />
            </Tabs>
            <SignInModal ref={loginModalRef} redirect={redirect} />
        </>
    );
};

export default BottomTabNavigation;
