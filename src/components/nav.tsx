import React from "react"
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Stack,
  Link,
} from "@chakra-ui/react"
import { Link as GatsbyLink } from "gatsby"

export const Nav = () => {
  return (
    <UnorderedList listStyleType={"none"} ml={0}>
      <Stack direction={"row"}>
        <ListItem>
          <Link as={GatsbyLink} to={"/"}>
            Home
          </Link>
        </ListItem>
        <ListItem>
          <Link as={GatsbyLink} to={"/projects"}>
            Projects
          </Link>
        </ListItem>
        <ListItem>
          <Link as={GatsbyLink} to={"/books"}>
            Books
          </Link>
        </ListItem>
        <ListItem>Blog</ListItem>
      </Stack>
    </UnorderedList>
  )
}
