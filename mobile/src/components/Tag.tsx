import { Box, Checkbox, HStack, Text, useTheme } from "native-base";
import { X, XCircle } from "phosphor-react-native";
import { useState } from "react";
import { Pressable, TouchableOpacity } from "react-native";

type TagProps = {
  text: string;
  isSelected: boolean;
  onSelectTag: (tag: string) => void;
}


export function Tag({ text, isSelected, onSelectTag }: TagProps) {

  const { colors } = useTheme()

  return (
    <Pressable onPress={() => onSelectTag(text)}>
      <HStack
        alignItems="center"
        justifyContent="center"
        bg={isSelected ? "blue.500" : "gray.500"}
        paddingX="4"
        paddingY={2}
        space={1}
        borderRadius="full"
      >
        <Text
          fontFamily="heading"
          fontSize="xs"
          fontWeight="bold"
          color={isSelected ? "white" : "gray.300"}
        >
          {text.toUpperCase()}
        </Text>

        {isSelected &&
          <XCircle size={13} color={colors.white} weight="fill" />
        }
      </HStack>
    </Pressable>
  )
}