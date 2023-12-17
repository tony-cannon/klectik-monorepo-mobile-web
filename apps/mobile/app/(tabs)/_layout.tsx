import ButtonIcon from "@native/components/button/ButtonIcon";
import { Tabs } from "expo-router";
import {
  HeartHalf,
  House,
  MagnifyingGlass,
  PlusCircle,
  UserSquare,
} from "phosphor-react-native";
import { Platform, View } from "react-native";

const BottomTabNavigation = () => {
  //const [redirect, setRedirect] = useState<string | boolean>(false);

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ size, color }) => <ButtonIcon icon={House} />,
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            tabBarLabel: "Search",
            tabBarIcon: ({ size, color }) => (
              <ButtonIcon icon={MagnifyingGlass} />
            ),
          }}
        />

        <Tabs.Screen
          name="create"
          options={{
            tabBarIcon: ({ size, color }) => {
              return (
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "red",
                    width: Platform.OS === "ios" ? 50 : 60,
                    height: Platform.OS === "ios" ? 50 : 60,
                    top: Platform.OS === "ios" ? -10 : -20,
                    borderRadius: Platform.OS === "ios" ? 25 : 30,
                  }}
                >
                  <ButtonIcon icon={PlusCircle} />
                </View>
              );
            },
          }}
          // listeners={({ navigation }) => ({
          //   tabPress: (e) => {
          //     if (user === null) {
          //       setRedirect('(tabs)/create');
          //       setOpenAuthBottomSheet(true);
          //       e.preventDefault();
          //     }
          //   },
          // })}
        />

        <Tabs.Screen
          name="add"
          options={{
            tabBarLabel: "Add",
            tabBarIcon: ({ size, color }) => <ButtonIcon icon={HeartHalf} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ size, color }) => <ButtonIcon icon={UserSquare} />,
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
    </>
  );
};

export default BottomTabNavigation;
