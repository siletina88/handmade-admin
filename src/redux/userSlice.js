import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //get all users
    getUsersStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getUsersSuccess: (state, action) => {
      state.isFetching = false;
      state.users = action.payload;
    },
    getUsersFailure: (state) => {
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
  getUsersFailure,
  getUsersStart,
  getUsersSuccess,
  // deleteProductFailure,
  // deleteProductStart,
  // deleteProductSuccess,
  // updateProductFailure,
  // updateProductStart,
  // updateProductSuccess,
  // addProductFailure,
  // addProductStart,
  // addProductSuccess,
} = userSlice.actions;
export default userSlice.reducer;
