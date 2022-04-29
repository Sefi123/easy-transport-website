import transporterActionTypes from "./transporter.types";

export const initState = {
  transporterVehicles: null,
};

function TransporterReducer(state = initState, action) {
  switch (action.type) {
    case transporterActionTypes.GET_VEHICLES_SUCCESS:
      return {
        ...state,
        ...{transporterVehicles: action.transporterVehicles},
      };
    default:
      return state;
  }
}

export default TransporterReducer;
