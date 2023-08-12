import { Button as NativeBaseButton, IButtonProps, Icon } from 'native-base'
import { Plus } from 'phosphor-react-native';


type ButtonProps = IButtonProps & {
  text: string;
  variants?: "primary" | "secondary" | "dark"
  plusIconLeft?: boolean
}

export function Button({text, plusIconLeft, variants = "primary", ...rest}: ButtonProps) {

  const variantsBgColors = {
    primary: "blue.500",
    secondary: "gray.500",
    dark: "gray.100"
  }

  return (
    <NativeBaseButton
      w="full"
      bg={variantsBgColors[variants]}

      _text={ { 
        fontFamily: "heading",
        fontSize: "sm",
        color: variants === "secondary" ? "gray.200" : "white"
      }}

      _pressed={{
        bg: variantsBgColors[variants],
        opacity: 0.8
      }}

      leftIcon={ plusIconLeft ? <Icon  as={<Plus size={16} color="white" />}/>  : undefined}

      {...rest}
    >
      {text}
    </NativeBaseButton>
  )
}