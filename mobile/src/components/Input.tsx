import { Input as NativeBaseInput, IInputProps, Icon, Pressable, useTheme } from "native-base"
import { Eye, EyeSlash } from "phosphor-react-native"
import { useState } from "react";

type InputProps = IInputProps & {
  isSecretInput?: boolean;
}

export function Input({ isSecretInput = false, ...rest }: InputProps) {

  const [showPassword, setShowPassword] = useState(false)

  const { colors } = useTheme()

  function handleShowPassword() {
    setShowPassword(!showPassword)
  }

  return (
    <NativeBaseInput
      bgColor="gray.700"
      paddingX={16}
      paddingY={12}
      color="gray.200"
      borderColor="transparent"
      placeholderTextColor="gray.400"
      fontSize="md"
      fontFamily="body"

      _focus={{
        borderWidth: 1,
        borderColor: "gray.300"
      }}

      InputRightElement={isSecretInput ? (
        <Icon as={
          <Pressable onPress={handleShowPassword} style={{ marginRight: 16 }}>
            {showPassword ?
              <Eye size={20} color={colors.gray["300"]} /> :
              <EyeSlash size={20} color={colors.gray["300"]} />
            }
          </Pressable>
        } />) : undefined}

      secureTextEntry={!showPassword}

      {...rest}
    />
  )
}