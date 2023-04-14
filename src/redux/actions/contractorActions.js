import {
    FETCH_CONTRACTORS_REQUEST,
    FETCH_CONTRACTORS_SUCCESS,
    FETCH_CONTRACTORS_FAILURE,
    ADD_CONTRACTOR_REQUEST,
    ADD_CONTRACTOR_SUCCESS,
    ADD_CONTRACTOR_FAILURE,
    DELETE_CONTRACTOR_REQUEST,
    DELETE_CONTRACTOR_SUCCESS,
    DELETE_CONTRACTOR_FAILURE,
    UPDATE_CONTRACTOR_REQUEST,
    UPDATE_CONTRACTOR_SUCCESS,
    UPDATE_CONTRACTOR_FAILURE,
  } from "../types";
  
  // Fetch contractors action
  export const fetchContractors = (tenantId) => async (dispatch) => {
    try {
      dispatch({ type: FETCH_CONTRACTORS_REQUEST });
  
      const res = await fetch(`/api/tenants/${tenantId}/contractors`);
      const data = await res.json();
  
      dispatch({
        type: FETCH_CONTRACTORS_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: FETCH_CONTRACTORS_FAILURE,
        payload: err.message,
      });
    }
  };
  
  // Add contractor action
  export const addContractor = (tenantId, contractor) => async (dispatch) => {
    try {
      dispatch({ type: ADD_CONTRACTOR_REQUEST });
  
      const res = await fetch(`/api/tenants/${tenantId}/contractors`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contractor),
      });
      const data = await res.json();
  
      dispatch({
        type: ADD_CONTRACTOR_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: ADD_CONTRACTOR_FAILURE,
        payload: err.message,
      });
    }
  };
  
  // Delete contractor action
  export const deleteContractor = (tenantId, contractorId) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_CONTRACTOR_REQUEST });
  
      const res = await fetch(`/api/tenants/${tenantId}/contractors/${contractorId}`, {
        method: "DELETE",
      });
  
      dispatch({
        type: DELETE_CONTRACTOR_SUCCESS,
        payload: contractorId,
      });
    } catch (err) {
      dispatch({
        type: DELETE_CONTRACTOR_FAILURE,
        payload: err.message,
      });
    }
  };
  
  // Update contractor action
  export const updateContractor = (tenantId, contractorId, updatedContractor) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_CONTRACTOR_REQUEST });
  
      const res = await fetch(`/api/tenants/${tenantId}/contractors/${contractorId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedContractor),
      });
      const data = await res.json();
  
      dispatch({
        type: UPDATE_CONTRACTOR_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: UPDATE_CONTRACTOR_FAILURE,
        payload: err.message,
      });
    }
  };