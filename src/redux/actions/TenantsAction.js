import axios from 'axios';
import {
  FETCH_TENANTS_REQUEST,
  FETCH_TENANTS_SUCCESS,
  FETCH_TENANTS_FAILURE,
  ADD_TENANT_REQUEST,
  ADD_TENANT_SUCCESS,
  ADD_TENANT_FAILURE,
  DELETE_TENANT_REQUEST,
  DELETE_TENANT_SUCCESS,
  DELETE_TENANT_FAILURE,
} from '../types';

// Fetch tenants
export const fetchTenants = () => async (dispatch) => {
  dispatch({ type: FETCH_TENANTS_REQUEST });
  try {
    const response = await axios.get('/api/tenants');
    dispatch({ type: FETCH_TENANTS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_TENANTS_FAILURE, payload: error.message });
  }
};

// Add tenant
export const addTenant = (tenant) => async (dispatch) => {
  dispatch({ type: ADD_TENANT_REQUEST });
  try {
    const response = await axios.post('/api/tenants', tenant);
    dispatch({ type: ADD_TENANT_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: ADD_TENANT_FAILURE, payload: error.message });
  }
};

// Delete tenant
export const deleteTenant = (tenantId) => async (dispatch) => {
  dispatch({ type: DELETE_TENANT_REQUEST });
  try {
    const response = await axios.delete(`/api/tenants/${tenantId}`);
    dispatch({ type: DELETE_TENANT_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: DELETE_TENANT_FAILURE, payload: error.message });
  }
};