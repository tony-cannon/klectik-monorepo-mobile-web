import { StyleSheet } from 'react-native';
import { useModal } from '@utilities/contexts/ModalContext';
import EditScreenInfo from '../../components/EditScreenInfo';
import { View } from '../../components/Themed';
import { Text } from 'tamagui';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text color={'$pink400'}>Tab Two</Text>
      <View
        style={styles.separator}
        lightColor='#eee'
        darkColor='rgba(255,255,255,0.1)'
      />
      <EditScreenInfo path='app/(tabs)/two.tsx' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    bg: 'blue',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    bg: 'blue',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
