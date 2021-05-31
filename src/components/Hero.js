import * as React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      datoCmsAsset(filename: { eq: "martagasiorowska.jpg" }) {
        id
        fluid {
          ...GatsbyDatoCmsFluid_tracedSVG
          src
        }
      }
    }
  `);

  return (
    <div className="hero">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-7">
            <h1
              data-sal="slide-up"
              data-sal-duration="300"
              data-sal-delay="300"
              data-sal-easing="ease"
            >
              Marta Gąsiorowska
            </h1>
            <p
              data-sal="slide-up"
              data-sal-duration="300"
              data-sal-delay="600"
              data-sal-easing="ease"
            >
              Dietetyk i trener personalny online
            </p>
            <Link
              to="/oferta"
              data-sal="slide-up"
              data-sal-duration="300"
              data-sal-delay="900"
              data-sal-easing="ease"
            >
              Sprawdź ofertę
            </Link>
          </div>
          <div className="col-md-5 hero_image">
            <Img fluid={data.datoCmsAsset.fluid} alt="Marta Gąsiorowska" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
