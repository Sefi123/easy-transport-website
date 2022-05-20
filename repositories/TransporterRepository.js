import Repository, {baseUrl, getError} from "./genericRepository";

const routes = {
    registerVehicle: "/v1/vehicle/register",
    getVehicles:"/v1/vehicle/get_vehicles_by_id?limit=100",
    getBookings:"/v1/users/get_vehicle_request",
    deleteVehicle:"/v1/vehicle/delete_vehicle?limit=1000",
    updateStatus:"/v1/vehicle/post_accept_booking",
    makeVehicleAvailable:"/v1/vehicle/make_vehicle_available",
  };

  class TransporterRepository {
    async registerVehicle(payload) {
      try {
        const request = await Repository.post(
          `${baseUrl}${routes.registerVehicle}`,
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
    async getVehicles(payload) {
      
      try {
        const request = await Repository.post(
         `${baseUrl}${routes.getVehicles}`,
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
    async transporterBookings(payload) {
      
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
    async deleteVehicle(payload) {
      try {
        const request = await Repository.post(
          `${baseUrl}${routes.deleteVehicle}`,
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
    async updateBookingStatus(payload) {
      try {
        const request = await Repository.post(
          `${baseUrl}${routes.updateStatus}`,
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
    async makeVehicleAvailable(payload) {
      try {
        const request = await Repository.post(
          `${baseUrl}${routes.makeVehicleAvailable}`,
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
    
  }
  
  export default new TransporterRepository();