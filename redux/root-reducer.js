import { combineReducers } from "redux";
import transporter from "./transporter/transporter.reducer";
import auth from "./auth/auth.reducer";
import vehicles from "./vehicles/vehicles.reducer"

const rootReducer = combineReducers({
  transporter,
  auth,
  vehicles,
});

export default rootReducer;
