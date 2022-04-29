import transporterActionTypes from "../transporter/transporter.types";

export function registerVehicle(payload, callback) {
    return { type: transporterActionTypes.REGISTER_VEHICLE, payload, callback };
  }
  export function getVehicles(payload, callback) {
  
    return { type: transporterActionTypes.GET_VEHICLES, payload, callback };
  }
  export function getVehiclesSuccess(transporterVehicles) {
    
    return { type: transporterActionTypes.GET_VEHICLES_SUCCESS, transporterVehicles };
  }