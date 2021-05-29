import * as React from "react";
import SEO from "../components/Seo";
import Layout from "../components/Layout";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";

const PageRecipes = () => {
  const data = useStaticQuery(graphql`
    {
      allDatoCmsRecipe {
        edges {
          node {
            id
            url
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
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Przepisy" />
      <div className="container">
        <p>Przepisy</p>
        <div className="row allRecipes">
          {data.allDatoCmsRecipe.edges.map((recipe) => (
            <div className="col-md-4">
              <div className="card">
                <Img
                  fluid={recipe.node.image.fluid}
                  className="card-img-top"
                  alt={recipe.node.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{recipe.node.title}</h5>
                  <p class="card-text">{recipe.node.seo.description}</p>
                  <Link
                    to={`/przepisy/${recipe.node.url}`}
                    className="btn btn-primary"
                  >
                    Zobacz przepis
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default PageRecipes;
