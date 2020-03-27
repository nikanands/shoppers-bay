import React from "react";

import CollectionItem from "./CollectionItem";

const Collections = ({ title, items }) => {
  return (
    <div className="collections__wrapper">
      <h1 className="collections__title">{title.toUpperCase()}</h1>
      <div className="collections-items__wrapper">
        {items
          .filter((item, index) => index < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default Collections;
