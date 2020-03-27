import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../redux/selectors/shopSelector";
import CollectionItem from "./CollectionItem";

const Category = ({ collections }) => {
  const { title, items } = collections;
  return (
    <div className="category__wrapper">
      <h2 className="category__title">{title}</h2>
      <div className="category__item_wrapper">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collections: selectCollection(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(Category);
