import { SafeAreaView } from "react-native";
import { Text, VStack, useTheme } from "native-base";

import LogosSVG from "@assets/logo.svg"
import MarketplaceSVG from "@assets/marketspace.svg"
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function Login() {

  const { colors } = useTheme()


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <VStack
        alignItems='center'
        justifyContent='center'
        bgColor="gray.600"
        borderBottomRadius={24}
        paddingTop="24"
        paddingBottom="16"
        paddingX="12"
      >
        <LogosSVG style={{ marginBottom: 20 }} />
        <MarketplaceSVG />

        <Text fontFamily="body" fontSize="sm" color="gray.300" marginBottom='20'>
          Seu espaço de compra e venda
        </Text>

        <Text fontFamily="body" fontSize="sm" color="gray.200" marginBottom='4'>
          Acesse sua conta
        </Text>

        <Input
          placeholder="E-mail"
          keyboardType="email-address"
          marginBottom="4"
        />

        <Input
          placeholder="Senha"
          isSecretInput
          marginBottom="8"
        />

        <Button text="Entrar" />

      </VStack>

      <VStack flex={1} paddingX="12" marginTop="12">
        <Text>
          Ainda não tem acesso?
        </Text>

        <Button text="Criar uma conta" variants="secondary" />
      </VStack>
    </SafeAreaView>
  )
}