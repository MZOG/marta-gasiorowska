import * as React from "react";
import SEO from "../../components/Seo";
import Layout from "../../components/Layout";
import { useStaticQuery, graphql, Link } from "gatsby";
import SingleRecipe from "../../components/SingleRecipe";

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
              <SingleRecipe
                name={recipe.node.name}
                image={recipe.node.image.fluid}
                description={recipe.node.seo.description}
                categoryName={recipe.node.category.name}
                categoryUrl={recipe.node.category.url}
                url={recipe.node.url}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default PregnentRecipes;
