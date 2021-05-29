import * as React from "react";

const WeekRecipe = () => {
  return (
          <div class="weekly_recipe">
    <div class="container">
      <h2>Zacznij już dziś z moim przepisem tygodnia!</h2>

      <div class="row">
        <div class="col-md-4 weekly_recipe-photo">
          <img
            src="~/assets/images/1.jpg"
            class="img-responsive"
            width="100%"
          />
        </div>
        <div class="col-md-8">
          <h3>DANE Z DATOCMS</h3>
          <h4>Opis przygotowania</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
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
