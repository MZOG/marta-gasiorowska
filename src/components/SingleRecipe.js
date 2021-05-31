import * as React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

const SingleRecipe = ({
  id,
  image,
  title,
  description,
  categoryName,
  categoryUrl,
  url,
}) => {
  return (
    <article className="card single_recipe" key={id}>
      <Img fluid={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p>
          Kategoria: <strong>{categoryName}</strong>
        </p>
        <Link
          to={`/przepisy/${categoryUrl}/${url}`}
          className="btn btn-primary"
        >
          Zobacz przepis
        </Link>
      </div>
    </article>
  );
};

export default SingleRecipe;
