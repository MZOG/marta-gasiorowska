import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";


const WeekRecipe = () => {
  const data = useStaticQuery(graphql`
  {
    allDatoCmsRecipe(filter: {recipeOfTheWeek: {eq: false}}) {
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
        }
      }
    }
  }
`)

console.log(data);
console.log(data.allDatoCmsRecipe.edges[0].node.title)



  return (
          <div class="weekly_recipe">
    <div class="container">
      <h2>Zacznij już dziś z moim przepisem tygodnia!</h2>

      <div class="row">
        <div class="col-md-4 weekly_recipe-photo">
        <Img fluid={data.allDatoCmsRecipe.edges[0].node.image.fluid} className="card-img-top" alt={data.allDatoCmsRecipe.edges[0].node.title} />
        </div>
        <div class="col-md-8">
          <h3>{data.allDatoCmsRecipe.edges[0].node.title}</h3>
          <h4>Opis przygotowania</h4>
          <p>
          {data.allDatoCmsRecipe.edges[0].node.recipeSteps}
          </p>
        </div>
      </div>

      <div class="weekly_recipe-info">
        <div class="row">
          <div class="col-md-4">
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
          <div class="col-md-4">
            <h5>Składniki odżywcze:</h5>
            <ul>
              <li>Kalorie (kcal): 470</li>
              <li>Białko: 32</li>
              <li>Węglowodany: 111</li>
              <li>Tłuszcze: 111</li>
            </ul>
          </div>
          <div class="col-md-4">
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
