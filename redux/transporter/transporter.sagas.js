import TransporterService from "../../repositories/TransporterRepository";
import {
  all,
  call,
  put,
  takeEvery,
  takeLatest,
  cancel,
  cancelled,
} from "redux-saga/effects";
import Router from "next/router";
import transporterActionTypes from "./transporter.types";
import {
  successNotification,
  errorNotification,
  infoNotification,
} from "../../components/notification/notification";
import {getVehicles, transporterBookingsSuccess, getVehiclesSuccess} from "./transporter.actions";
import {appName} from "../../repositories/genericRepository";

function* registerVehicleSaga(action) {
  try {
    const {results} = yield call(
      TransporterService.registerVehicle,
      action.payload
    );
    successNotification("Success","Vehicle Added Successfully");
    Router.push("/transporter/vehicles");
    action.callback();
  } catch (error) {
    if (action && action.callback) {
      console.log("Error: ", error);
      action.callback();
      errorNotification("Error", error);
    }
  } finally {
    yield cancel();
  }
}

function* getVehiclesSaga(action) {
  try {
    let _transporterVehicles;
    const {results} = yield call(TransporterService.getVehicles,action.payload,);
    _transporterVehicles=results;
    yield put(getVehiclesSuccess(_transporterVehicles));
    action.callback();
  } catch (error) {
    if (action && action.callback) {
      console.log("Error: ", error);
      action.callback();
      errorNotification("Error", error);
    }
  } finally {
    yield cancel();
  }
}
function* transporterBookingsSaga(action) {
  try {
    let _transporterBookings;
    const {results} = yield call(TransporterService.transporterBookings,action.payload,);
    _transporterBookings=results;
    yield put(transporterBookingsSuccess(_transporterBookings));
    action.callback();
  } catch (error) {
    if (action && action.callback) {
      console.log("Error: ", error);
      action.callback();
      errorNotification("Error", error);
    }
  } finally {
    yield cancel();
  }
}

function* deleteVehicleSaga(action) {
  try {
    const {results} = yield call(
      TransporterService.deleteVehicle,
      action.payload
    );
    successNotification("Success","Vehicle Deleted Successfully");
    action.callback();
  } catch (error) {
    if (action && action.callback) {
      console.log("Error: ", error);
      action.callback();
      errorNotification("Error", error);
    }
  } finally {
    yield cancel();
  }
}


export default function* rootSagas() {
  yield all([takeEvery(transporterActionTypes.REGISTER_VEHICLE, registerVehicleSaga)]);
  yield all([takeEvery(transporterActionTypes.GET_VEHICLES, getVehiclesSaga)]);
  yield all([takeEvery(transporterActionTypes.TRANSPORTER_BOOKINGS, transporterBookingsSaga)]);
  yield all([takeEvery(transporterActionTypes.DELETE_VEHICLE, deleteVehicleSaga)]);
  
}
