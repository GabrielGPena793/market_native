import { Avatar as NativeBaseAvatar, IAvatarProps} from "native-base"

type AvatarProps = IAvatarProps &{
  size: number
  borderVariantColor: 'blue' | 'white'
}

export function Avatar({ size, borderVariantColor, ...rest  }: AvatarProps) {
  return (
    <NativeBaseAvatar
      h={size}
      w={size}
      borderWidth={2}
      borderColor={borderVariantColor == 'blue' ? "blue.500" : "white"}
      {...rest}
    />
  )
}