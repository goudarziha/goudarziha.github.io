import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { MarkdownRemark } from "../graphql-types"
import { Heading, Text, Box, Link } from "@chakra-ui/react"

export const Card = ({ node }: { node: MarkdownRemark }) => {
  const frontmatter = node!.frontmatter!
  const fields = node!.fields!
  const slug = fields.slug!
  const excerpt = node!.excerpt!
  const title = frontmatter.title || fields.slug
  return (
    <Box key={slug}>
      <Link as={GatsbyLink} to={slug} textDecoration={"dotted"}>
        {title}
      </Link>
      {/* <p
        dangerouslySetInnerHTML={{
          __html: frontmatter.description || excerpt,
        }}
      /> */}
    </Box>
  )
}
