import {
  FETCH_CONTRACTORS_REQUEST,
  FETCH_CONTRACTORS_SUCCESS,
  FETCH_CONTRACTORS_FAILURE,
  ADD_CONTRACTOR_REQUEST,
  ADD_CONTRACTOR_SUCCESS,
  ADD_CONTRACTOR_FAILURE,
  UPDATE_CONTRACTOR_REQUEST,
  UPDATE_CONTRACTOR_SUCCESS,
  UPDATE_CONTRACTOR_FAILURE,
  DELETE_CONTRACTOR_REQUEST,
  DELETE_CONTRACTOR_SUCCESS,
  DELETE_CONTRACTOR_FAILURE,
} from '../types';

const initialState = {
  contractors: [],
  loading: false,
  error: null,
};

const contractorReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONTRACTORS_REQUEST:
      return { ...state, loading: true };
    case FETCH_CONTRACTORS_SUCCESS:
      return { ...state, loading: false, contractors: action.payload };
    case FETCH_CONTRACTORS_FAILURE:
      return { ...state, loading: false, error: action.payload };
  
    case UPDATE_CONTRACTOR_REQUEST:
      return { ...state, loading: true };
    case UPDATE_CONTRACTOR_SUCCESS:
      const updatedContractors = state.contractors.map((contractor) =>
        contractor.id === action.payload.id ? action.payload : contractor
      );
      return { ...state, loading: false, contractors: updatedContractors };
    case UPDATE_CONTRACTOR_FAILURE:
      return { ...state, loading: false, error: action.payload };
   
    default:
      return state;
  }
};

export default contractorReducer;