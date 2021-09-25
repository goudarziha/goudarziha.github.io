import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { MarkdownRemark } from "../graphql-types"
import { Box, Link } from "@chakra-ui/react"

export const Card = ({ node }: { node: MarkdownRemark }) => {
  const frontmatter = node!.frontmatter!
  const fields = node!.fields!
  const slug = fields.slug!
  const title = frontmatter.title || fields.slug
  const date = frontmatter?.date

  return (
    <Box key={slug}>
      <Link as={GatsbyLink} to={slug} textDecoration={"dotted"}>
        {date} {title}
      </Link>
    </Box>
  )
}
