import { Spinner } from "native-base";

export function Loading() {

  return (
    <Spinner 
      flex={1}
      color="blue.500"
      bg="gray.600" 
    />
  )
}