import vehicleActionTypes from "./vehicles.types";

export function getUserVehicles(payload, callback) {
  
    return { type: vehicleActionTypes.GET_USER_VEHICLES, payload, callback };
  }
  export function getUserVehiclesSuccess(result) {

    return { type: vehicleActionTypes.GET_USER_VEHICLES_SUCCESS, result };
  }