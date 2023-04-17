import {
    FETCH_TENANTS_REQUEST,
    FETCH_TENANTS_SUCCESS,
    FETCH_TENANTS_FAILURE,
  
    UPDATE_TENANTS_REQUEST,
    UPDATE_TENANTS_SUCCESS,
    UPDATE_TENANTS_FAILURE,
  
  } from '../types';


const initialState = {
    tenants: [],
    loading: false,
    error: null
  };
  
  const tenantsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_TENANTS_REQUEST':
        return {
          ...state,
          loading: true,
          error: null
        };
      case 'FETCH_TENANTS_SUCCESS':
        return {
          ...state,
          tenants: action.payload,
          loading: false,
          error: null
        };
      case 'FETCH_TENANTS_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default tenantsReducer;
  