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
  export const fetchContractors = () => async (dispatch) => {
    try {
      dispatch({ type: FETCH_CONTRACTORS_REQUEST });
  
      const res = await fetch(`https://lyxhnfqadkwtmitlupzp.supabase.co/rest/v1/contractors`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5eGhuZnFhZGt3dG1pdGx1cHpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA4ODE2MjYsImV4cCI6MTk5NjQ1NzYyNn0.Q-0g9JV9VaJ59cqycpFUfqoHU9G3IMGA_6aXQNH1nEw',
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5eGhuZnFhZGt3dG1pdGx1cHpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA4ODE2MjYsImV4cCI6MTk5NjQ1NzYyNn0.Q-0g9JV9VaJ59cqycpFUfqoHU9G3IMGA_6aXQNH1nEw'
        },
      });
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
          'Authorization': 'Bearer your-token',
          'x-api-key': 'your-api-key'
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
  export const updateContractor = (contractorId, updatedContractor) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_CONTRACTOR_REQUEST });
  
      const res = await fetch(`https://lyxhnfqadkwtmitlupzp.supabase.co/rest/v1/contractors?id=eq.1`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5eGhuZnFhZGt3dG1pdGx1cHpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA4ODE2MjYsImV4cCI6MTk5NjQ1NzYyNn0.Q-0g9JV9VaJ59cqycpFUfqoHU9G3IMGA_6aXQNH1nEw',
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5eGhuZnFhZGt3dG1pdGx1cHpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA4ODE2MjYsImV4cCI6MTk5NjQ1NzYyNn0.Q-0g9JV9VaJ59cqycpFUfqoHU9G3IMGA_6aXQNH1nEw'
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