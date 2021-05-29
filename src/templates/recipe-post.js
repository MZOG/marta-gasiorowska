/* disable eslint */
import React from "react";
import SEO from "../components/Seo";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";

const RecipePost = ({ data }) => {
  const recipe = data.datoCmsRecipe;

  return (
    <Layout>
      <SEO title={recipe.title} />
      <div className="container">
        {recipe.title}
        <Img fluid={recipe.image.fluid} />
        <div dangerouslySetInnerHTML={{ __html: recipe.recipeSteps }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($url: String!) {
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
`;

export default RecipePost;
