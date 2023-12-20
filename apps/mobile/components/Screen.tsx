import { colors } from '@theme/color/colors';
import { useMemo, type ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

type screenProps = {
    centerContent?: boolean;
    children: ReactNode;
    showLogoNotification?: boolean;
    scrollEnabled?: boolean;
};

export default function Screen(props: screenProps): ReactNode {
    const { centerContent = false, children, scrollEnabled = false } = props;

    const styles = useMemo(
        () =>
            StyleSheet.create({
                safeContainer: {
                    flex: 1,
                    backgroundColor: colors.pink600,
                },
                centerContent: {
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                ScrollView: {
                    margin: 10,
                },
            }),
        []
    );
    return (
        <SafeAreaView style={styles.safeContainer}>
            {scrollEnabled ? (
                <ScrollView
                    contentContainerStyle={[
                        centerContent && styles.centerContent,
                        styles.ScrollView,
                    ]}
                >
                    {children}
                </ScrollView>
            ) : (
                <View>{children}</View>
            )}
        </SafeAreaView>
    );
}
