import { userConstants, cartConstants } from "./constants";
import axios from "../helpers/axios";

export const getAddress = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`/user/getaddress`);
      dispatch({ type: userConstants.GET_USER_ADDRESS_REQUEST });
      if (res.status === 200) {
        const {
          userAddress: { address },
        } = res.data;
        dispatch({
          type: userConstants.GET_USER_ADDRESS_SUCCESS,
          payload: { address },
        });
      } else {
        const { error } = res.data;
        dispatch({
          type: userConstants.GET_USER_ADDRESS_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {}
  };
};

export const addAddress = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({ type: userConstants.ADD_USER_ADDRESS_REQUEST });
      const res = await axios.post(`/user/address/create`, { payload });
      if (res.status === 201) {
        // (res);
        const {
          address: { address },
        } = res.data;
        dispatch({
          type: userConstants.ADD_USER_ADDRESS_SUCCESS,
          payload: { address },
        });
      } else {
        const { error } = res.data;
        dispatch({
          type: userConstants.ADD_USER_ADDRESS_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {}
  };
};

export const addOrder = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({ type: userConstants.ADD_USER_ORDER_REQUEST });
      const res = await axios.post(`/addOrder`, payload);
      if (res.status === 201) {
        // (res);
        const { order } = res.data;
        dispatch({
          type: cartConstants.RESET_CART,
        });
        dispatch({
          type: userConstants.ADD_USER_ORDER_SUCCESS,
          payload: { order },
        });
      } else {
        const { error } = res.data;
        dispatch({
          type: userConstants.ADD_USER_ORDER_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {}
  };
};

export const getOrders = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`/getOrders`);
      dispatch({ type: userConstants.GET_USER_ORDER_REQUEST });
      if (res.status === 200) {
        // (res);
        const { orders } = res.data;
        dispatch({
          type: userConstants.GET_USER_ORDER_SUCCESS,
          payload: { orders },
        });
      } else {
        const { error } = res.data;
        dispatch({
          type: userConstants.GET_USER_ORDER_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {}
  };
};

// single order with complete info and delivery location
export const getOrder = (payload) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`/getOrder`, payload);
      dispatch({ type: userConstants.GET_USER_ORDER_DETAILS_REQUEST });
      if (res.status === 200) {
        // (res);
        const { order } = res.data;
        dispatch({
          type: userConstants.GET_USER_ORDER_DETAILS_SUCCESS,
          payload: { order },
        });
      } else {
        const { error } = res.data;
        dispatch({
          type: userConstants.GET_USER_ORDER_DETAILS_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {}
  };
};
