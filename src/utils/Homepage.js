import React from "react";

import { connect } from "react-redux";

import CategoryItem from "../components/CategoryItem";
import { selectCategorySection } from "../redux/selectors/categorySelector";

const Homepage = ({ categories }) => {
  return (
    <div className="category__container">
      {categories.map(({ title, id, imageUrl, size, linkUrl }) => (
        <CategoryItem
          title={title}
          key={id}
          imageUrl={imageUrl}
          size={size}
          url={linkUrl}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  categories: selectCategorySection(state)
});

export default connect(mapStateToProps)(Homepage);
