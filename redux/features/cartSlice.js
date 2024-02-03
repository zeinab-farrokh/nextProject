import { sumProduct, sumQuantity } from "@/utils/auth";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedItems: [],
  itemCounter: 0,
  total: 0,
  checkOut: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 })
        state.total=sumProduct(state.selectedItems)
        state.itemCounter=sumQuantity(state.selectedItems)
        state.checkOut=false
      }

    },
    increase: (state, action) => {
      const indexIncrese = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexIncrese].quantity++;
      state.total=sumProduct(state.selectedItems)
        state.itemCounter=sumQuantity(state.selectedItems)
        state.checkOut=false
    },
    decrease: (state, action) => {
      const indexDecrese = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexDecrese].quantity--;
      state.total=sumProduct(state.selectedItems)
        state.itemCounter=sumQuantity(state.selectedItems)
        state.checkOut=false
    },
    remove: (state, action) => {
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.selectedItems=newSelectedItems
      state.total=sumProduct(state.selectedItems)
      state.itemCounter=sumQuantity(state.selectedItems)
    

    },
    checkout: (state) => {
        state.selectedItems= []
        state.itemCounter= 0
        state.total= 0
        state.checkOut= true
    }
  },
});

export default cartSlice.reducer;
export const { add, increase, decrease, remove,checkout } = cartSlice.actions;
