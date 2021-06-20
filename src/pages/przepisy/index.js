import * as React from "react";
import SEO from "../../components/Seo";
import Layout from "../../components/Layout";
import { useStaticQuery, graphql, Link } from "gatsby";
import SingleRecipe from "../../components/SingleRecipe";

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
            category {
              name
              url
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
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Przepisy" />
      <div className="container all_recipes">
        <h1>Wszystkie Przepisy</h1>

        <ul className="all_recipes-categories">
          <li>
            <Link to="/przepisy/posilki-na-silownie">
              Posiłki dla aktywnych fizycznie
            </Link>
          </li>
          <li>
            <Link to="/przepisy/posilki-odchudzajace">Posiłki na redukcje</Link>
          </li>
          <li>
            <Link to="/przepisy/posilki-dla-kobiet-w-ciazy-i-karmiacych">
              Posiłki dla kobiet w ciąży i karmiących piersią
            </Link>
          </li>
        </ul>

        <div className="row allRecipes">
          {data.allDatoCmsRecipe.edges.map((recipe) => (
            <div className="col-md-4" key={recipe.node.id}>
              <SingleRecipe
                name={recipe.node.name}
                image={recipe.node.image.fluid}
                description={recipe.node.seo?.description || null}
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

export default PageRecipes;
