import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //get all products
    getOrderStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getOrderSuccess: (state, action) => {
      state.isFetching = false;
      state.orders = action.payload;
    },
    getOrderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    // //delete a product
    // deleteProductStart: (state) => {
    //   state.isFetching = true;
    //   state.error = false;
    // },
    // deleteProductSuccess: (state, action) => {
    //   state.isFetching = false;
    //   state.products.splice(
    //     state.products.findIndex((item) => item._id === action.payload),
    //     1
    //   );
    // },
    // deleteProductFailure: (state) => {
    //   state.isFetching = false;
    //   state.error = true;
    // },

    // //update a product
    // updateProductStart: (state) => {
    //   state.isFetching = true;
    //   state.error = false;
    // },
    // updateProductSuccess: (state, action) => {
    //   state.isFetching = false;
    //   state.products[state.products.findIndex((item) => item._id === action.payload.id)] = action.payload.product;
    // },
    // updateProductFailure: (state) => {
    //   state.isFetching = false;
    //   state.error = true;
    // },

    // //update a product
    // addProductStart: (state) => {
    //   state.isFetching = true;
    //   state.error = false;
    // },
    // addProductSuccess: (state, action) => {
    //   state.isFetching = false;
    //   state.products.push(action.payload);
    // },
    // addProductFailure: (state) => {
    //   state.isFetching = false;
    //   state.error = true;
    // },
  },
});

export const {
  getOrderFailure,
  getOrderStart,
  getOrderSuccess,
  // deleteProductFailure,
  // deleteProductStart,
  // deleteProductSuccess,
  // updateProductFailure,
  // updateProductStart,
  // updateProductSuccess,
  // addProductFailure,
  // addProductStart,
  // addProductSuccess,
} = orderSlice.actions;
export default orderSlice.reducer;
