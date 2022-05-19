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
  export function transporterBookings(payload, callback) {
  
    return { type: transporterActionTypes.TRANSPORTER_BOOKINGS, payload, callback };
  }
  export function transporterBookingsSuccess(bookingsResult) {
    
    return { type: transporterActionTypes.TRANSPORTER_BOOKINGS_SUCCESS, bookingsResult };
  }
  export function deleteVehicle(payload, callback) {
    return { type: transporterActionTypes.DELETE_VEHICLE, payload, callback };
  }
  export function updateBookingStatus(payload, callback) {
    return { type: transporterActionTypes.UPDATE_BOOKING_STATUS, payload, callback };
  }
  export function makeVehicleAvailable(payload, callback) {
    return { type: transporterActionTypes.MAKE_VEHICLE_AVAILABLE, payload, callback };
  }