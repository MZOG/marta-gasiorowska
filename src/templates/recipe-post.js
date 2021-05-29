/* disable eslint */
import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout"

export default ({ data }) => {
  const recipe = data.datoCmsRecipe;
  console.log(recipe)

  return (
    <Layout>
        <div className="container">
        {recipe.title}
        <Img fluid={recipe.image.fluid} />
        <div dangerouslySetInnerHTML={{ __html: recipe.recipeSteps }} />
        </div>
    </Layout>
  )
}

export const query = graphql`
  query($url: String!) {
    datoCmsRecipe(url: { eq: $url }) {
      id
      title
      recipeSteps
      image {
        fluid {
          ...GatsbyDatoCmsFluid_tracedSVG
          src
        }
      }
      seo {
        description
      }
    }
  }
`