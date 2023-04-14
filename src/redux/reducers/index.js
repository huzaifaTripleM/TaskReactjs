import { combineReducers } from "redux";
import contractorReducer from "./contractorReducer";

const rootReducer = combineReducers({
  contractors: contractorReducer,
});

export default rootReducer;