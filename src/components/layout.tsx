import { PageRendererProps } from "gatsby"
import React, { ReactNode } from "react"
import { FadeLink } from "./link"
import { Footer } from "./footer"
import { Nav } from "./nav"
import { Heading, Stack, Container, Link } from "@chakra-ui/react"

interface Props extends PageRendererProps {
  title: string
  children: ReactNode
}

export const Layout = (props: Props) => {
  const { location, title, children } = props

  return (
    <Container maxW={"container.lg"} my={12}>
      <Stack spacing={12}>
        {location.pathname === "/" ? (
          <Heading a={"h1"}>
            <Link as={FadeLink} to="/">
              {title}
            </Link>
          </Heading>
        ) : (
          <Heading as={"h3"}>{title}</Heading>
        )}
        <Nav />
      </Stack>
      <main>{children}</main>
      <Footer />
    </Container>
  )
}
