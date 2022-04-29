import VehiclesService from "../../repositories/VehiclesRespsitory";
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
import vehiclesActionTypes from "./vehicles.types";
import {
  successNotification,
  errorNotification,
  infoNotification,
} from "../../components/notification/notification";
import {getUserVehiclesSuccess} from "./vehicles.actions";
import {appName} from "../../repositories/genericRepository";


function* getUserVehiclesSaga(action) {
    try {
        let _vehicles;
          const {vehicles} = yield call(VehiclesService.getUserVehicles, action.payload);
          _vehicles = vehicles;
        yield put(getUserVehiclesSuccess(_vehicles));
        action.callback();
      } catch (error) {
        if (action && action.callback) {
          action.callback();
          errorNotification("Error", error);        
        }
      } finally {
        yield cancel();
      }
}


export default function* rootSagas() {
  yield all([takeEvery(vehiclesActionTypes.GET_USER_VEHICLES, getUserVehiclesSaga)]);
  
}
