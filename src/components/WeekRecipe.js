import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";

const WeekRecipe = () => {
  const data = useStaticQuery(graphql`
    {
      allDatoCmsRecipe(
        filter: { recipeOfTheWeek: { eq: true } }
        limit: 1
        sort: { fields: category___meta___updatedAt, order: DESC }
      ) {
        edges {
          node {
            url
            title
            id
            image {
              fluid {
                ...GatsbyDatoCmsFluid_tracedSVG
                src
              }
            }
            recipeOfTheWeek
            recipeSteps
            fats
            calories
            carbohydrates
            protein
            time
            difficulty
            ingredient {
              addSkladnik
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

  const {
    title,
    url,
    recipeSteps,
    fats,
    calories,
    carbohydrates,
    protein,
    time,
    difficulty,
  } = data.allDatoCmsRecipe.edges[0].node;

  const categoryUrl = data.allDatoCmsRecipe.edges[0].node.category.url;
  const ingredients = data.allDatoCmsRecipe.edges[0].node.ingredient;

  return (
    <div className="weekly_recipe">
      <div className="container">
        <h2>Zacznij już dziś z moim przepisem tygodnia!</h2>

        <div className="row">
          <div className="col-md-4 weekly_recipe-photo">
            <Img
              fluid={data.allDatoCmsRecipe.edges[0].node.image.fluid}
              className="card-img-top"
              alt={title}
            />
          </div>
          <div className="col-md-8">
            <h3>{title}</h3>
            <h4>Opis przygotowania</h4>
            <div dangerouslySetInnerHTML={{ __html: recipeSteps }}></div>
            <Link
              to={`/przepisy/${categoryUrl}/${url}`}
              className="btn btn-primary"
            >
              Zobacz przepis
            </Link>
          </div>
        </div>

        <div className="weekly_recipe-info">
          <div className="row">
            <div className="col-md-4">
              <h5>Składniki</h5>
              <ul>
                {ingredients.map((ingredient) => (
                  <li>{ingredient.addSkladnik}</li>
                ))}
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Składniki odżywcze:</h5>
              <ul>
                <li>Kalorie (kcal): {calories}</li>
                <li>Białko: {protein}</li>
                <li>Węglowodany: {carbohydrates}</li>
                <li>Tłuszcze: {fats}</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Trudność: {difficulty}/5</h5>
              <h5>Czas przygotowania: {time} min</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeekRecipe;
