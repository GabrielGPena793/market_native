import { StatusBar } from 'react-native';
import { Box, NativeBaseProvider, Text } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar
        backgroundColor='transparent'
        barStyle='light-content'
        translucent
      />
      <Box 
        flex={1}
        alignItems='center'
        justifyContent='center'
        bgColor="#1A181B"
      >
        <Text 
          color="#FFF"
        >
          Chama, dum dumn dumm dumnd umd ummm
        </Text>
      </Box>
    </NativeBaseProvider>
  );
}

