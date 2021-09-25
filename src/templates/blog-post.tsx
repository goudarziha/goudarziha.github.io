import { graphql, PageRendererProps, Link as GatsbyLink } from "gatsby"
import React from "react"
import { Bio } from "../components/bio"
import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { Query, SitePageContext } from "../graphql-types"
import {
  Box,
  Flex,
  Link,
  Stack,
  Text,
  Heading,
  Divider,
} from "@chakra-ui/react"

interface Props extends PageRendererProps {
  pageContext: SitePageContext
  data: Query
}

const BlogPostTemplate = (props: Props) => {
  const data = props.data!
  const post = data.markdownRemark!
  const excerpt = post.excerpt!
  const frontmatter = post.frontmatter!
  const html = post.html!
  const siteTitle = data.site!.siteMetadata!.title!
  const { previous, next } = props.pageContext

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title={frontmatter.title!}
        description={frontmatter.description || excerpt}
      />
      <Stack spacing={12}>
        <Box mt={12}>
          <Stack spacing={2}>
            <Heading as={"h2"} fontSize={"2xl"}>
              {post.frontmatter!.title}
            </Heading>
            <Text fontSize={"sm"}>{frontmatter.date}</Text>
          </Stack>
        </Box>
        <div dangerouslySetInnerHTML={{ __html: html }} />

        <Flex direction={"row"} justify={"space-between"}>
          {previous && (
            <Link as={GatsbyLink} to={previous.fields!.slug!} rel="prev">
              ← {previous.frontmatter!.title}
            </Link>
          )}
          {next && (
            <Link as={GatsbyLink} to={next.fields!.slug!} rel="next">
              {next.frontmatter!.title} →
            </Link>
          )}
        </Flex>
        <Divider />
        <Bio />
      </Stack>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
