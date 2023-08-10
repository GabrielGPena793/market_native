import { Button as NativeBaseButton, IButtonProps } from 'native-base'


type ButtonProps = IButtonProps & {
  text: string;
  variants?: "primary" | "secondary" | "dark"
}

export function Button({text, variants = "primary", ...rest}: ButtonProps) {

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

      {...rest}
    >
      {text}
    </NativeBaseButton>
  )
}