import React from "react"
import { ShowLayout } from "../../components"

import { ebb } from "../../data/trilogy"

export const query = graphql`
  query EbbPageQuery {
    headerImage: allFile(
      filter: { relativeDirectory: { eq: "trilogy" }, name: { eq: "ebb" } }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(cropFocus: NORTH) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    galleryImages: allFile(filter: { relativeDirectory: { eq: "shows/ebb" } }) {
      edges {
        node {
          id
          childImageSharp {
            fixed(width: 195) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
    showHtml: markdownRemark(frontmatter: { title: { eq: "Ebb & Flood" } }) {
      frontmatter {
        title
        location
        date
      }
      html
    }
  }
`

export default ({ data }) => (
  <ShowLayout
    title={data.showHtml.frontmatter.title}
    location={data.showHtml.frontmatter.location}
    date={data.showHtml.frontmatter.date}
    headerImage={data.headerImage}
    headerImageClass="ebb-header"
    bodyHtml={data.showHtml.html}
    galleryImageNodes={data.galleryImages.edges}
  />
)
