import { publicRequest, userRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess, logoutFailure, logoutStart, logoutSuccess } from "./authSlice";
import {
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  getProductFailure,
  getProductStart,
  getProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
} from "./productSlice";

//login

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
// logout
export const logout = (dispatch) => {
  dispatch(logoutStart());
  try {
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutFailure());
  }
};
// get all products
export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (error) {
    dispatch(getProductFailure());
  }
};

// delete product by id
export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    // const res = await userRequest.get(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (error) {
    dispatch(deleteProductFailure());
  }
};
// update Product
export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    const res = await userRequest.put(`/products/${id}`, product);
    dispatch(updateProductSuccess({ id, product }));
  } catch (error) {
    dispatch(updateProductFailure());
  }
};
// add new product
export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/products/`, product);
    dispatch(addProductSuccess(res.data));
  } catch (error) {
    dispatch(addProductFailure());
  }
};
