import { Button as NativeBaseButton, IButtonProps } from 'native-base'


type ButtonProps = IButtonProps & {
  text: string;
  variants?: "primary" | "secondary" | "dark"
}

export function Button({text, variants = "primary", ...rest}: ButtonProps) {

  const variantsColors = {
    primary: "blue.500",
    secondary: "gray.500",
    dark: "gray.100"
  }

  return (
    <NativeBaseButton
      w="full"
      bg={variantsColors[variants]}

      _text={ { 
        fontFamily: "heading",
        fontSize: "sm"
      }}

      _pressed={{
        bg: "blue.500",
        opacity: 0.9
      }}

      {...rest}
    >
      {text}
    </NativeBaseButton>
  )
}