import { createSlice } from "@reduxjs/toolkit";

const loadCartFromStorage = () => {
  try {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : { items: [], managerId: null };
  } catch {
    return { items: [], managerId: null };
  }
};

const saveCartToStorage = (state) => {
  try {
    localStorage.setItem("cart", JSON.stringify(state));
  } catch {
    console.error("Could not save cart to localStorage");
  }
};

const initialState = loadCartFromStorage();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setManagerId: (state, action) => {
      state.managerId = action.payload;
      saveCartToStorage(state);
    },

    addToCart: (state, action) => {
      const { id, quantity = 1 } = action.payload;

      const existing = state.items.find((i) => i.id === id);

      if (existing) {
        existing.quantity += quantity;
      } else {
        state.items.push({ ...action.payload, quantity });
      }

      saveCartToStorage(state);
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
      saveCartToStorage(state);
    },

    decreaseQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter((i) => i.id !== action.payload);
        }
        saveCartToStorage(state);
      }
    },

    clearCart: (state) => {
      state.items = [];
      saveCartToStorage(state);
    },
  },
});

export const {
  setManagerId,
  addToCart,
  removeFromCart,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
