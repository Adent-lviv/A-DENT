
export const selectTotalPrice = (state) =>
  state.cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
