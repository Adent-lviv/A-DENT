export const selectTotalPrice = (state) =>
  state.cart.items.reduce((acc, item) => {
    const price = parseFloat(item.price);
    if (isNaN(price)) return acc; 
    return acc + price * item.quantity;
  }, 0);
