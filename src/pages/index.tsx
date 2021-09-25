import { graphql, PageRendererProps, useStaticQuery } from "gatsby"
import React from "react"
import { Bio } from "../components/bio"
import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { MarkdownRemark } from "../graphql-types"
import { Heading, Stack } from "@chakra-ui/react"
import { Card } from "../components/card"

type Props = PageRendererProps

const BlogIndex = (props: Props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
            }
          }
        }
      }
    }
  `)

  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <Stack spacing={12}>
        <Bio />
        <Stack spacing={4}>
          <Heading as={"h4"} size={"md"}>
            Updates
          </Heading>
          {posts.map(({ node }: { node: MarkdownRemark }) => (
            <Card node={node} />
          ))}
        </Stack>
      </Stack>
    </Layout>
  )
}

export default BlogIndex
