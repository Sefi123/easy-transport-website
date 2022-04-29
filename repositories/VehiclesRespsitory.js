import Repository, {baseUrl, getError} from "./genericRepository";

const routes = {
    getVehicles:"/v1/vehicle/get_vehicles/"
  };

  class VehiclesRepository {
    async getUserVehicles(payload) {
     
      try {
        const request = await Repository.post(
          `${baseUrl}${routes.getVehicles}`,
          payload,
         
        );
        const {data} = request;
        const vehicles=data.results;
        console.log(data);
        console.log(vehicles);
        return {
          vehicles,
        };
      } catch (error) {
        throw getError(error);
      }
  
    }
    
  }
  
  export default new VehiclesRepository();