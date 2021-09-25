import React from "react"
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Stack,
} from "@chakra-ui/react"

export const Newsletter = () => {
  const handleSubmit = (values: any) => {
    console.log(values)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={4}>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <Button type={"submit"} colorScheme={"red"}>
          Subscribe
        </Button>
      </Stack>
    </form>
  )
}
