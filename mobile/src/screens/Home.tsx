import { Pressable, SafeAreaView } from "react-native";
import { Avatar, Box, HStack, Heading, ScrollView, Text, VStack, useTheme } from "native-base";
import { Button } from "@components/Button";
import { ArrowRight, Tag } from "phosphor-react-native";
import { SearchInput } from "@components/SearchInput";

export function Home() {

  const { colors } = useTheme()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView flex={1} paddingTop={16} paddingX={6}>
        <HStack>
          <Avatar
            source={{ uri: "https://github.com/gabrielgpena793.png" }}
            h={45}
            w={45}
            borderWidth={2}
            borderColor="blue.500"
          />

          <VStack marginLeft={3} marginRight={2} flexGrow={1}>
            <Text fontSize="md" fontFamily="body" color="gray.100" >Boas vindas,</Text>
            <Heading fontSize="md" fontFamily="heading" color="gray.100"  >Gabriel!</Heading>
          </VStack>

          <Button text="Criar anúncio" variants="dark" maxW={139} plusIconLeft />
        </HStack>


        <Text marginTop={8} marginBottom={3}  fontFamily="body" fontSize="sm" >
          Seus produtos anunciados para venda
        </Text>
        <HStack paddingY={3} paddingX={4} bgColor="#dfe1ea" borderRadius={6} alignItems="center">
          <Tag size={22} color={colors.blue[600]} />

          <VStack marginLeft={4} flexGrow={1} >
            <Text fontFamily="heading" color="gray.200" fontSize="lg" >4</Text>
            <Text>anúncios ativos</Text>
          </VStack>

          <Pressable>
            <HStack alignItems="center">
              <Text
                color="blue.600"
                fontFamily="heading"
                fontWeight="bold"
                fontSize="xs"
                marginRight={2}
              >
                Meus anúncios
              </Text>
              <ArrowRight size={16} color={colors.blue[600]} />
            </HStack>
          </Pressable>
        </HStack>

        <Text marginBottom={3} marginTop={8} fontFamily="body" fontSize="sm">
          Compre produtos variados
        </Text>
        <SearchInput />

      </ScrollView>
    </SafeAreaView>
  )
}