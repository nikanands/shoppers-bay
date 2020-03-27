import React from "react";
import { connect } from "react-redux";

import Collections from "./Collections";
import { selectShopCollectionsOverview } from "../redux/selectors/shopSelector";

const CollectionsOverview = ({ collections }) => {
  console.log(collections);
  return (
    <>
      {collections.map(({ id, items, routeName, title }) => (
        <Collections
          key={id}
          items={items}
          routeName={routeName}
          title={title}
        />
      ))}
    </>
  );
};

const mapStateToProps = state => ({
  collections: selectShopCollectionsOverview(state)
});

export default connect(mapStateToProps)(CollectionsOverview);
