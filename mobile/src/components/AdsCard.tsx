import { Box, HStack, Image, Text, VStack } from "native-base";
import { Avatar } from "./Avatar";


export interface AdsCardProps {
  id: string;
  name: string;
  is_new: boolean;
  price: number;
  accept_trade: boolean;
}

export function AdsCard({id, is_new, price, name, accept_trade }: AdsCardProps) {

  return (
    <VStack>
      <Box position="relative" borderRadius={5} h={100} w={153} paddingX={1} paddingTop={1} overflow="hidden">
      <Image
          source={{ uri: "https://images.unsplash.com/photo-1509959246013-d2e0f4d0876a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" }}
          resizeMode="contain"
          position="absolute"
          h={100} w={153}
          alt="Ads imagem"
          borderRadius={5}
        />

        <HStack justifyContent="space-between">
          <Avatar
            source={{ uri: "https://github.com/gabrielgpena793.png" }}
            size={28}
            borderVariantColor="white"
          />

          <Text paddingX={2} paddingY="2px" bg="blue.600" borderRadius="full" fontFamily="heading" fontSize="sm" color="white">
            Novo
          </Text>
        </HStack>
      </Box>

      <Text fontFamily="body" color="gray.200" fontSize="14">
        Tênis vermelho
      </Text>
      <Text fontFamily="heading" color="gray.100" fontSize="16">
        R$ 59,90
      </Text>

    </VStack>
  )
}