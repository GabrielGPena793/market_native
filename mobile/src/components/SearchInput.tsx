import { Box, HStack, Input } from "native-base";
import { MagnifyingGlass, Sliders } from "phosphor-react-native";



export function SearchInput() {

  return (
    <Box>
      <Input
        bgColor="gray.700"
        paddingX={16}
        paddingY={12}
        color="gray.200"
        borderColor="transparent"
        placeholderTextColor="gray.400"
        fontSize="md"
        fontFamily="body"

        placeholder="Buscar anúncio"
        InputRightElement={
          <HStack space={3} marginRight={4} >
            <MagnifyingGlass size={20} color="#000" />
            <Box h={18} w="px" bg="gray.400" />
            <Sliders size={20} color="#000" />
          </HStack>
        }
      />
    </Box>
  )
}