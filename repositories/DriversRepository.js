import Repository, {baseUrl, getError} from "./genericRepository";

const routes = {
    getDrivers:"/v1/users/drivers?limit=100",
    driverBooking:"/v1/users/vehicle_request",
    getBookings:"/v1/users/get_vehicle_request",
    updatedriverStatus:"/v1/vehicle/post_accept_booking",
    makeDriverAvailable: "/v1/vehicle/make_vehicle_available",
  };

  class DriverRepository {
    async getDrivers(payload) {
      
      try {
        const request = await Repository.post(
         `${baseUrl}${routes.getDrivers}`,
          payload,
        );
        const {data} = request;
        return {
          results: data.results,
        };
      } catch (error) {
       
        throw getError(error);
       
      }
    }
    async driverBooking(payload) {
      try {
        const request = await Repository.post(
          `${baseUrl}${routes.driverBooking}`,
          payload
        );
        const {data} = request;
        return {
          results: data.results,
        };
      } catch (error) {
        throw getError(error);
      }
    }
    async getDriverBookings(payload) {
      
      try {
        const request = await Repository.post(
         `${baseUrl}${routes.getBookings}`,
          payload,
        );
        const {data} = request;
        return {
          results: data.results,
        };
      } catch (error) {
       
        throw getError(error);
       
      }
    }
    async updateDriverStatus(payload) {
      
      try {
        const request = await Repository.post(
         `${baseUrl}${routes.updatedriverStatus}`,
          payload,
        );
        const {data} = request;
        return {
          results: data.results,
        };
      } catch (error) {
       
        throw getError(error);
       
      }
    }
    async makeDriverAvailable(payload) {
      
      try {
        const request = await Repository.post(
         `${baseUrl}${routes.makeDriverAvailable}`,
          payload,
        );
        const {data} = request;
        return {
          results: data.results,
        };
      } catch (error) {
       
        throw getError(error);
       
      }
    }
    
  }
  
  export default new DriverRepository();