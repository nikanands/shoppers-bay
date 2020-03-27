import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "./CollectionsOverview";

const Shop = ({ match }) => {
  console.log(match);
  return (
    <div className="shop__wrapper">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
    </div>
  );
};

export default Shop;
