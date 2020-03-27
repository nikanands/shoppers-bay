import ShopData from "../../utils/ShopData";

const INITIAL_STATE = {
  collections: ShopData
};

const shopDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopDataReducer;
