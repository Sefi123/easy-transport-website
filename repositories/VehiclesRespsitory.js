import Repository, {baseUrl, getError} from "./genericRepository";

const routes = {
    getVehicles:"/v1/vehicle/get_vehicles/",
    vehicleBooking:"/v1/users/vehicle_request"
  };

  class VehiclesRepository {
    async getUserCars(payload) {
     
      try {
        const request = await Repository.post(
          `${baseUrl}${routes.getVehicles}`,
          payload,
         
        );
        const {data} = request;
        const cars=data.results;
        return {
          cars,
        };
      } catch (error) {
        throw getError(error);
      }
  
    }
    async getUserVans(payload) {
     
      try {
        const request = await Repository.post(
          `${baseUrl}${routes.getVehicles}`,
          payload,
         
        );
        const {data} = request;
        const vans=data.results;
        return {
          vans,
        };
      } catch (error) {
        throw getError(error);
      }
  
    }
    async getUserBuses(payload) {
     
      try {
        const request = await Repository.post(
          `${baseUrl}${routes.getVehicles}`,
          payload,
         
        );
        const {data} = request;
        const buses=data.results;
        return {
          buses,
        };
      } catch (error) {
        throw getError(error);
      }
  
    }
    async getUserSmTrucks(payload) {
     
      try {
        const request = await Repository.post(
          `${baseUrl}${routes.getVehicles}`,
          payload,
         
        );
        const {data} = request;
        const smTrucks=data.results;
        return {
          smTrucks,
        };
      } catch (error) {
        throw getError(error);
      }
  
    }
    async getUserLgTrucks(payload) {
     
      try {
        const request = await Repository.post(
          `${baseUrl}${routes.getVehicles}`,
          payload,
         
        );
        const {data} = request;
        const lgTrucks=data.results;
        return {
          lgTrucks,
        };
      } catch (error) {
        throw getError(error);
      }
  
    }
    async vehicleBookingRequest(payload) {
      try {
        const request = await Repository.post(
          `${baseUrl}${routes.vehicleBooking}`,
          payload
        );
        const {data} = request;
        console.log(data);
        return {
          results: data.results,
        };
      } catch (error) {
        throw getError(error);
      }
    }
    
    
  }
  
  export default new VehiclesRepository();