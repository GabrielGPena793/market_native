import { SafeAreaView } from "react-native";
import { Heading, Pressable, ScrollView, Text, VStack, useTheme } from "native-base";

import { useNavigation } from "@react-navigation/native"
import { AuthNavigationRoutesProps } from "@routes/auth.routes";

import LogosSVG from "@assets/logo.svg"
import AvatarSVG from "@assets/avatar.svg"

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { PencilSimpleLine } from "phosphor-react-native";

export function SingIn() {

  const { colors } = useTheme()
  const navigation = useNavigation<AuthNavigationRoutesProps>()


  function loginNavigate() {
    navigation.navigate("login")
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView flex={1} showsVerticalScrollIndicator={false}>
        <VStack
          alignItems='center'
          justifyContent='center'
          bgColor="gray.600"
          borderBottomRadius={24}
          paddingTop="16"
          paddingBottom="16"
          paddingX="12"
        >
          <LogosSVG style={{ marginBottom: 20 }} width={60} height={40} />

          <Heading fontFamily="heading" fontSize="lg" color="gray.300" marginBottom='2'>
            Boas vindas!
          </Heading>
          <Text fontFamily="body" fontSize="sm" color="gray.300" marginBottom='8' textAlign="center">
            Crie sua conta e use o espaço para comprar itens variados e vender seus produtos
          </Text>

          <VStack position="relative" marginBottom="4">
            <AvatarSVG width={88} height={88} />
            <Pressable
              _pressed={{ bg: "blue.600" }}
              position="absolute"
              bg="blue.500"
              padding="3"
              rounded="full"
              bottom={0}
              right={-8}
            >
              <PencilSimpleLine size={16} />
            </Pressable>
          </VStack>


          <Input
            placeholder="Nome"
            marginBottom="4"
          />

          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            marginBottom="4"
          />

          <Input
            placeholder="Telefone"
            keyboardType="phone-pad"
            marginBottom="4"
          />

          <Input
            placeholder="Senha"
            isSecretInput
            marginBottom="4"
          />


          <Input
            placeholder="Confirmar senha"
            isSecretInput
            marginBottom="8"
          />

          <Button text="Entrar" variants="dark"  marginBottom="12"/>

          <Text textAlign="center" marginBottom="4">
            Já tem uma conta?
          </Text>

          <Button text="Ir para o login" variants="secondary" onPress={loginNavigate} />

        </VStack>

      </ScrollView>
    </SafeAreaView>
  )
}