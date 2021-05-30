import * as React from "react";
import SEO from "../../components/Seo";
import Layout from "../../components/Layout";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";

const PregnentRecipes = () => {
  const data = useStaticQuery(graphql`
    {
      allDatoCmsRecipe(
        filter: {
          category: { url: { eq: "posilki-dla-kobiet-w-ciazy-i-karmiacych" } }
        }
      ) {
        edges {
          node {
            url
            title
            id
            recipeOfTheWeek
            image {
              fluid {
                ...GatsbyDatoCmsFluid_tracedSVG
                src
              }
            }
            seo {
              description
            }
            category {
              name
              url
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Przepisy" />
      <div className="container all_recipes">
        <h1>Posiłki dla kobiet w ciązy i karmiących</h1>

        <ul className="all_recipes-categories">
          <li>
            <Link to="/przepisy">Wszystkie przepisy</Link>
          </li>
        </ul>

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
                  <p>
                    Kategoria: <strong>{recipe.node.category.name}</strong>
                  </p>
                  <Link
                    to={`/przepisy/${recipe.node.category.url}/${recipe.node.url}`}
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

export default PregnentRecipes;
