import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
  } from 'react-native';
  //TODO: createIcon factory in packages/ui...
  import { ChatCircleText, BellRinging } from 'phosphor-react-native';
  import { Link } from 'expo-router';
  
  const LogoNotificationHeader = () => {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={styles.container}>
          <View style={styles.actionRow}>
            <TouchableOpacity>
              <Text
                style={{
                  fontFamily: 'LogoScript',
                  fontSize: 25,
                  color: '#fff',
                }}
              >
                Klectik
              </Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>
              <Link href={'/(tabs)/home'} asChild>
                <TouchableOpacity>
                  <BellRinging
                    size={28}
                    color={'#fff'}
                    style={{ paddingHorizontal: 30 }}
                  />
                </TouchableOpacity>
              </Link>
              <Link href={'/(tabs)/home'} asChild>
                <TouchableOpacity>
                  <ChatCircleText size={28} color={'#fff'} />
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#000',
      height: 50,
      elevation: 2,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 6,
      shadowOffset: {
        width: 1,
        height: 10,
      },
      //marginTop: StatusBar.currentHeight,
    },
    actionRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 24,
      paddingVertical: 10,
    },
  
    searchBtn: {
      backgroundColor: '#fff',
      flexDirection: 'row',
      gap: 10,
      padding: 14,
      alignItems: 'center',
      width: 280,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#c2c2c2',
      borderRadius: 30,
      elevation: 2,
      shadowColor: '#000',
      shadowOpacity: 0.12,
      shadowRadius: 8,
      shadowOffset: {
        width: 1,
        height: 1,
      },
    },
    filterBtn: {
      padding: 10,
      borderWidth: 1,
      borderColor: '#A2A0A2',
      borderRadius: 24,
    },
    categoryText: {
      fontSize: 14,
      fontFamily: 'mon-sb',
      color: '#333',
    },
    categoryTextActive: {
      fontSize: 14,
      fontFamily: 'mon-sb',
      color: '#000',
    },
    categoriesBtn: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 8,
    },
    categoriesBtnActive: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomColor: '#000',
      borderBottomWidth: 2,
      paddingBottom: 8,
    },
  });
  
  export default LogoNotificationHeader;