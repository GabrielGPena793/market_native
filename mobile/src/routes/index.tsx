import { NavigationContainer, DefaultTheme } from "@react-navigation/native"

import { Box } from "native-base";
import { AuthRoutes } from "@routes/auth.routes";
import { AppRoutes } from "@routes/app.routes";


export function Routes() {
  return (
    <Box flex={1} bgColor="gray.600">
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </Box>
  )
}