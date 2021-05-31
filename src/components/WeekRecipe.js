import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";

const WeekRecipe = () => {
  const data = useStaticQuery(graphql`
    {
      allDatoCmsRecipe(filter: { recipeOfTheWeek: { eq: false } }) {
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
          }
        }
      }
    }
  `);

  const { title, url, recipeSteps, fats, calories, carbohydrates, protein } =
    data.allDatoCmsRecipe.edges[0].node;

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
            <p>{recipeSteps}</p>
            <Link to={`/przepisy/${url}`} className="btn btn-primary">
              Zobacz przepis
            </Link>
          </div>
        </div>

        <div className="weekly_recipe-info">
          <div className="row">
            <div className="col-md-4">
              <h5>Składniki</h5>
              <ul>
                <li>Woda gazowana (250ml)</li>
                <li>Mąka pszenna typu 500 (300g)</li>
                <li>2 jajka</li>
                <li>Szczypta soli</li>
                <li>Odrobina oliwy do podsmażenia</li>
                <li>Jagody (garść)</li>
                <li>Truskawki (3 sztuki)</li>
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
              <h5>Trudność: 3/5</h5>
              <h5>Czas przygotowania: 45min</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeekRecipe;
