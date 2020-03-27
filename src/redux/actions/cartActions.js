export const toggleCartHidden = () => ({
  type: "TOGGLE_CART_HIDDEN"
});

export const addItem = item => ({
  type: "ADD_ITEM",
  payload: item
});

export const removeItem = item => ({
  type: "REMOVE_CART_ITEM",
  payload: item
});

export const reduceItem = item => ({
  type: "REDUCE_CART_ITEM",
  payload: item
});
