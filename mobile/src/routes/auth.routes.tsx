import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack"

import { Login } from "@screens/Login"
import { SingIn } from "@screens/SingIn"

type AuthRoutes = {
  login: undefined;
  singIn: undefined;
}

export type AuthNavigationRoutesProps = NativeStackNavigationProp<AuthRoutes>

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>()

export function AuthRoutes() {

  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen
        name="login"
        component={Login}
      />

      <Screen
        name="singIn"
        component={SingIn}
      />
    </Navigator>
  )
}