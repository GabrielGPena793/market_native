import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs"

import { House, SignOut, Tag } from "phosphor-react-native";

import { CreateAdd } from "@screens/CreateAdd";
import { Home } from "@screens/Home";
import { MyAds } from "@screens/MyAds";
import { ProductDetails } from "@screens/ProductDetails";
import { useTheme } from "native-base";
import { Platform } from "react-native";
import { Login } from "@screens/Login";
import { LogOut } from "@screens/LogOut";

type AppRoutes = {
  home: undefined;
  productDetails: undefined;
  myAds: undefined;
  createAdd: undefined;
  logOut: undefined;
}

export type AppNavigationRoutesProps = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()

export function AppRoutes() {

  const { colors, sizes } = useTheme()

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.gray[200],
        tabBarInactiveTintColor: colors.gray[400],
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopWidth: 0,
          height: Platform.OS === 'android' ? 'auto' : 96,
          paddingBottom: sizes[10],
          paddingTop: sizes[6]
        }

      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <House weight="regular" size={24} color={color} />
        }}
      />

      <Screen
        name="myAds"
        component={MyAds}
        options={{
          tabBarIcon: ({ color }) => <Tag weight="regular" size={24} color={color} />
        }}
      />

      <Screen
        name="logOut"
        component={LogOut}
        options={{
          tabBarIcon: () => <SignOut weight="regular" size={24} color={colors.red["400"]} />
        }}
      />

      <Screen
        name="createAdd"
        component={CreateAdd}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="productDetails"
        component={ProductDetails}
        options={{ tabBarButton: () => null }}
      />


    </Navigator>
  )
}