import React from "react"
import { graphql, PageRendererProps, useStaticQuery } from "gatsby"
import { Bio } from "../components/bio"
import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { MarkdownRemark } from "../graphql-types"
import { Heading, Stack, Text } from "@chakra-ui/react"

type Props = PageRendererProps

const Books = (props: Props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const siteTitle = data.site.siteMetadata.title
  // const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <Stack spacing={12}>
        <Stack spacing={4}>
          <Heading as={"h4"} size={"md"}>
            Books
          </Heading>
          <Text>coming soon</Text>
        </Stack>
        <Bio />
      </Stack>
    </Layout>
  )
}
export default Books
