import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //get all orders
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

    //delete a order
    deleteOrderStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteOrderSuccess: (state, action) => {
      state.isFetching = false;
      state.orders.splice(
        state.orders.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteOrderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    //update order by id
    updateOrderStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateOrderSuccess: (state, action) => {
      state.isFetching = false;
      state.orders[state.orders.findIndex((item) => item._id === action.payload.id)] = action.payload.order;
    },
    updateOrderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

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

export const { getOrderFailure, getOrderStart, getOrderSuccess, updateOrderFailure, updateOrderSuccess, updateOrderStart, deleteOrderFailure, deleteOrderStart, deleteOrderSuccess } =
  orderSlice.actions;
export default orderSlice.reducer;
