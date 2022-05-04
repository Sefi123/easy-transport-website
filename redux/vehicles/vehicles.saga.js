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
import {getUserCarsSuccess} from "./vehicles.actions";
import {getUserVansSuccess} from "./vehicles.actions";
import {getUserBusesSuccess} from "./vehicles.actions";
import {getUserSmTrucksSuccess} from "./vehicles.actions";
import {getUserLgTrucksSuccess} from "./vehicles.actions";
import {appName} from "../../repositories/genericRepository";


function* getUserCarsSaga(action) {
    try {
        let _cars;
          const {cars} = yield call(VehiclesService.getUserCars, action.payload);
          _cars = cars;
        yield put(getUserCarsSuccess(_cars));
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
function* getUserVansSaga(action) {
  try {
      let _vans;
        const {vans} = yield call(VehiclesService.getUserVans, action.payload);
        _vans = vans;
      yield put(getUserVansSuccess(_vans));
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
function* getUserBusesSaga(action) {
  try {
      let _buses;
        const {buses} = yield call(VehiclesService.getUserBuses, action.payload);
        _buses = buses;
      yield put(getUserBusesSuccess(_buses));
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
function* getUserSmTrucksSaga(action) {
  try {
      let _smTrucks;
        const {smTrucks} = yield call(VehiclesService.getUserSmTrucks, action.payload);
        _smTrucks = smTrucks;
      yield put(getUserSmTrucksSuccess(_smTrucks));
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
function* getUserLgTrucksSaga(action) {
  try {
      let _lgTrucks;
        const {lgTrucks} = yield call(VehiclesService.getUserLgTrucks, action.payload);
        _lgTrucks = lgTrucks;
      yield put(getUserLgTrucksSuccess(_lgTrucks));
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
function* vehicleBookingRequestSaga(action) {
  try {
    const {results} = yield call(
      VehiclesService.vehicleBookingRequest,
      action.payload
    );
    successNotification("Success","Vehicle Booked Sucessfully");
    Router.push("/dashboard");
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
  yield all([takeEvery(vehiclesActionTypes.GET_USER_CARS, getUserCarsSaga)]);
  yield all([takeEvery(vehiclesActionTypes.GET_USER_VANS, getUserVansSaga)]);
  yield all([takeEvery(vehiclesActionTypes.GET_USER_BUSES, getUserBusesSaga)]);
  yield all([takeEvery(vehiclesActionTypes.GET_USER_SMTRUCKS, getUserSmTrucksSaga)]);
  yield all([takeEvery(vehiclesActionTypes.GET_USER_LGTRUCKS, getUserLgTrucksSaga)]);
  yield all([takeEvery(vehiclesActionTypes.VEHICLE_BOOKING_REQUEST, vehicleBookingRequestSaga)]);
  
}
