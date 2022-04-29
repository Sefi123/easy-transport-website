import Repository, {baseUrl, getError} from "./genericRepository";

const routes = {
    registerVehicle: "/v1/vehicle/register",
    getVehicles:"/v1/vehicle/get_vehicles_by_id"
  };

  class TransporterRepository {
    async registerVehicle(payload) {
      try {
        const request = await Repository.post(
          `${baseUrl}${routes.registerVehicle}`,
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
    async getVehicles(payload) {
      
      try {
        const request = await Repository.post(
         `${baseUrl}${routes.getVehicles}`,
          payload,
        );
        const {data} = request;
        // console.log(data.results);
        return {
          results: data.results,
        };
      } catch (error) {
       
        throw getError(error);
       
      }
    }
    
  }
  
  export default new TransporterRepository();