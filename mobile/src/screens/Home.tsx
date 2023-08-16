import { Pressable, SafeAreaView } from "react-native";
import { Box, FlatList, HStack, Heading, Text, VStack, useTheme } from "native-base";
import { Button } from "@components/Button";
import { ArrowRight, Tag } from "phosphor-react-native";
import { SearchInput } from "@components/SearchInput";
import { useCallback, useRef, useState } from "react";
import { Avatar } from "@components/Avatar";
import { IAdsDTO } from "@dtos/AdsDTO";
import { AdsCard } from "@components/AdsCard";
import { BottomModal } from "@components/BottomModal";
import BottomSheet from "@gorhom/bottom-sheet";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";


function Home() {

  const [ads, setAds] = useState<IAdsDTO[]>([{
    id: "dasdasdsaadas",
    name: "Luminária Pendente",
    description: "Essa é a melhor luminária do mundo. Você não vai se arrepender.",
    is_new: true,
    price: 45000,
    accept_trade: true,
    payment_methods: [
      [
        "pix",
        "card"
      ]
    ]
  },
  {
    id: "dasdasdsaadas",
    name: "Luminária Pendente",
    description: "Essa é a melhor luminária do mundo. Você não vai se arrepender.",
    is_new: true,
    price: 45000,
    accept_trade: true,
    payment_methods: [
      [
        "pix",
        "card"
      ]
    ]
  }])

  const sheetRef = useRef<BottomSheet>(null);
  const handleSnapPress = useCallback((index: number) => {
    sheetRef.current?.snapToIndex(index);
  }, []);


  const { colors } = useTheme()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box flex={1} paddingTop={16} paddingX={6} position="relative">
        <HStack>
          <Avatar
            source={{ uri: "https://github.com/gabrielgpena793.png" }}
            borderVariantColor="blue"
            size={44}
          />

          <VStack marginLeft={3} marginRight={2} flexGrow={1}>
            <Text fontSize="md" fontFamily="body" color="gray.100" >Boas vindas,</Text>
            <Heading fontSize="md" fontFamily="heading" color="gray.100"  >Gabriel!</Heading>
          </VStack>

          <Button text="Criar anúncio" variants="dark" maxW={139} plusIconLeft />
        </HStack>


        <Text marginTop={8} marginBottom={3} fontFamily="body" fontSize="sm" >
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
        <SearchInput onSnapPress={handleSnapPress} />

        <FlatList
          data={ads}
          keyExtractor={(item) => item.id}
          numColumns={2}
          marginTop={6}
          columnWrapperStyle={{
            justifyContent: "space-between"
          }}
          renderItem={({ item }) => (
            <AdsCard
              id={item.id}
              accept_trade={item.accept_trade}
              is_new={item.is_new}
              name={item.name}
              price={item.price}
            />
          )}
        />
      </Box>

      <BottomModal
        bottomRef={sheetRef}
      />
    </SafeAreaView>
  )
}

export default gestureHandlerRootHOC(Home)