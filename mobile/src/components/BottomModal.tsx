import { Box, HStack, Heading, Text, VStack, useTheme } from "native-base";
import { useCallback, useMemo, useState } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { Dimensions, TouchableOpacity } from "react-native";
import { X } from "phosphor-react-native";
import { Tag } from "./Tag";

type BottomModalProps = {
  bottomRef: React.RefObject<BottomSheetMethods>;
}

const { height } = Dimensions.get("window")


export function BottomModal({ bottomRef }: BottomModalProps) {

  const [selectedNewOld, setSelectedNewOld] = useState<string[]>([])


  const { colors } = useTheme()

  const snapPoints = useMemo(() => [1, height - 310], []);


  const handleClosePress = useCallback(() => {
    bottomRef.current?.close();
  }, []);

  function handleSelectNewOldTag(name: string) {
    if (selectedNewOld.includes(name)) {
      const filter = selectedNewOld.filter(tag => tag !== name);
      setSelectedNewOld(filter)
    } else {
      setSelectedNewOld(oldState => [...oldState, name])
    }
  }


  return (
    <BottomSheet
      containerHeight={200}
      ref={bottomRef}
      snapPoints={snapPoints}
    >
      <BottomSheetView>
        <VStack paddingX={6} paddingTop={12} space={6}>
          <HStack justifyContent="space-between">
            <Heading color="gray.100" fontFamily="heading" fontSize="lg">Filtrar anúncios</Heading>
            <TouchableOpacity onPress={handleClosePress}>
              <X size={24} weight="regular" color={colors.gray[400]} />
            </TouchableOpacity>
          </HStack>

          <Box>
            <Text fontFamily="heading" color="gray.200" fontSize="sm" marginBottom="4">
              Condição
            </Text>

            <HStack space={2}>
              <Tag
                text="NOVO"
                isSelected={selectedNewOld.includes("NOVO")}
                onSelectTag={handleSelectNewOldTag}
              />

              <Tag
                text="USADO"
                isSelected={selectedNewOld.includes("USADO")}
                onSelectTag={handleSelectNewOldTag}
              />
            </HStack>
          </Box>
        </VStack>

      </BottomSheetView>
    </BottomSheet>
  )
}