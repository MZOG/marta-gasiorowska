import * as React from "react";
import SEO from "../components/Seo";
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import Boxes from "../components/CollabBoxes";
import WeekRecipe from "../components/WeekRecipe";
import FloatingBoxes from "../components/FloatingBoxes";

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <Carousel fullWidth>
        <p>elo</p>
      </Carousel>
      <div className="container">
        <p>
          Dietetyk jest specjalistą z obszaru ochrony zdrowia, którego domeną
          jest żywienie człowieka w zdrowiu i w chorobie. Dietetyk zajmuje się
          żywieniem osób indywidualnych i żywieniem zbiorowym, edukacją
          żywieniową społeczeństwa oraz promocją zdrowia. O dietetyku mówi się,
          że jest specjalistą interdyscyplinarnym, bo posiada wiedzę także z
          zakresu anatomii, biochemii, medycyny i psychologii.{" "}
        </p>

        <FloatingBoxes />
      </div>
      <WeekRecipe />

      <Boxes />
    </Layout>
  );
};

export default IndexPage;
