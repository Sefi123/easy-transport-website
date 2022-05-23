import { createSelector } from 'reselect';

const driversResult = (state, props) => {
    const id = props.id
    const driverByid = state.drivers.driversResult?.filter(driver => driver.id.includes(id));
    return driverByid
  }

export const driverData = () => createSelector(
    [ driversResult ],
    (driver) => driver
  )