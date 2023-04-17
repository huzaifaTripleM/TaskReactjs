import axios from 'axios';
import {
  FETCH_TENANTS_REQUEST,
  FETCH_TENANTS_SUCCESS,
  FETCH_TENANTS_FAILURE,
  UPDATE_TENANT_REQUEST,
  UPDATE_TENANT_SUCCESS,
  UPDATE_TENANT_FAILURE,
} from '../types';


// Fetch tenants
export const fetchTenants = () => async (dispatch) => {
  console.log("tenant")
  dispatch({ type: FETCH_TENANTS_REQUEST });
  try {
    const response = await axios.get('https://lyxhnfqadkwtmitlupzp.supabase.co/rest/v1/tenants' , {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5eGhuZnFhZGt3dG1pdGx1cHpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA4ODE2MjYsImV4cCI6MTk5NjQ1NzYyNn0.Q-0g9JV9VaJ59cqycpFUfqoHU9G3IMGA_6aXQNH1nEw'
      },
      
    });
    dispatch({ type: FETCH_TENANTS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_TENANTS_FAILURE, payload: error.message });
  }
};


export const updateTenants = (contractorId, updatedContractor) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_TENANT_REQUEST });
    const res = await fetch(`https://lyxhnfqadkwtmitlupzp.supabase.co/rest/v1/tenants?id=eq.2`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5eGhuZnFhZGt3dG1pdGx1cHpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA4ODE2MjYsImV4cCI6MTk5NjQ1NzYyNn0.Q-0g9JV9VaJ59cqycpFUfqoHU9G3IMGA_6aXQNH1nEw'
      },
      body: JSON.stringify(updatedContractor),
    });
    const data = await res.json();

    dispatch({
      type: UPDATE_TENANT_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: UPDATE_TENANT_FAILURE,
      payload: err.message,
    });
  }
};