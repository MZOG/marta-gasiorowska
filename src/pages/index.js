import * as React from "react";
import SEO from "../components/Seo";
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import WeekRecipe from "../components/WeekRecipe";
import Contact from "../components/Contact";
import Cooperation from "../components/Cooperation";

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <Cooperation />
      <Contact />
      <WeekRecipe />
    </Layout>
  );
};

export default IndexPage;
