import React from "react";

import { withRouter } from "react-router-dom";

const CategoryItem = ({ title, imageUrl, size, url, history, match }) => {
  return (
    <div
      className={`${size} category-item__container`}
      onClick={() => history.push(`${match.url}${url}`)}
    >
      <img className="background-image" src={imageUrl} alt="img" />
      <div className="category__item">
        <h1 className="category__item__title">{title.toUpperCase()}</h1>
        <h3 className="category__item__subtitle">SHOP NOW</h3>
      </div>
    </div>
  );
};

export default withRouter(CategoryItem);
