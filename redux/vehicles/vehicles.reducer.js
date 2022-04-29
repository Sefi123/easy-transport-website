import actionTypes from "./vehicles.types";

export const initState = {
  vehicles: null,
};

function UserVehiclesReducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.GET_USER_VEHICLES_SUCCESS:
      return {
        ...state,
        ...{vehicles: action.result},
      };
    default:
      return state;
  }
}

export default UserVehiclesReducer;
