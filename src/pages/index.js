import * as React from "react";
import SEO from "../components/Seo";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import WeekRecipe from "../components/WeekRecipe";
import Contact from "../components/Contact";
import Cooperation from "../components/Cooperation";

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <Hero />
      <Cooperation />
      <Contact />
      <WeekRecipe />
    </Layout>
  );
};

export default IndexPage;
