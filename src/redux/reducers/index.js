import { combineReducers } from "redux";
import contractorReducer from "./contractorReducer";
import tenantsReducer from "./tenantsReducer";

const rootReducer = combineReducers({
  contractors: contractorReducer,
  tenants : tenantsReducer
});

export default rootReducer;