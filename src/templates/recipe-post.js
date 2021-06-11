/* disable eslint */
import React from "react";
import SEO from "../components/Seo";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";

const RecipePost = ({ data }) => {
  const recipe = data.datoCmsRecipe;

  console.log(recipe.ingredient);

  return (
    <Layout>
      <SEO title={recipe.title} />
      <div className="container single_recipe">
        <div className="row">
          <div className="col-md-6">
            <h1>{recipe.title}</h1>
            <p>Kategoria: {recipe.category.name}</p>

            <div className="single_recipe__calories">
              <h2>Wartości odżywcze</h2>
              <p>
                Kalorie: <strong>{recipe.calories} kcal</strong>
              </p>
              <p>
                Białko: <strong>{recipe.protein}</strong>
              </p>
              <p>
                Węglowodany: <strong>{recipe.carbohydrates}</strong>
              </p>
              <p>
                Tłuszcze: <strong>{recipe.fats}</strong>
              </p>
            </div>

            <div
              dangerouslySetInnerHTML={{ __html: recipe.recipeSteps }}
              className="single_recipe_steps"
            />
          </div>
          <div className="col-md-6">
            <Img fluid={recipe.image.fluid} className="single_recipe-image" />
          </div>
        </div>
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
      fats
      calories
      carbohydrates
      protein
      ingredient {
        addSkladnik
      }
      category {
        name
      }
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
