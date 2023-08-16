import { Box, HStack, Input } from "native-base";
import { MagnifyingGlass, Sliders } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";


type SearchInputProps = {
  onSnapPress: (index: number) => void;
}

export function SearchInput({ onSnapPress }: SearchInputProps) {

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

            <Box w="px" bg="gray.400" />

            <TouchableOpacity onPress={() => onSnapPress(1)} >
              <Sliders size={20} color="#000" />
            </TouchableOpacity>
          </HStack>
        }
      />
    </Box>
  )
}