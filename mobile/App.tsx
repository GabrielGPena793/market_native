import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { Login } from '@screens/Login';

import { useFonts, Karla_400Regular, Karla_700Bold} from '@expo-google-fonts/karla'
import { THEME } from './src/theme';
import { Loading } from '@components/Loading';
import { Routes } from '@routes/index';

export default function App() {
  const [loadingFonts] = useFonts({Karla_400Regular, Karla_700Bold })

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        backgroundColor='transparent'
        barStyle='light-content'
        translucent
      />
       {loadingFonts ? <Routes /> : <Loading />}
    </NativeBaseProvider>
  );
}

