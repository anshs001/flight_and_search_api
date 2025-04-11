const {FlightRepository, AirplaneRepository } = require('../repository/index');

class FlightService {

    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightrepository = new FlightRepository();
    }


    async createFlight(data) {
        try {
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            if (!airplane) {
                throw new Error("Airplane not found for ID: " + data.airplaneId);
            }

            const flight = await this.flightrepository.createFlight({
                ...data,
                totalSeats: airplane.capacity
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw { error };
        }
    }
    

    async getFlightData() {

    }
}
module.exports=FlightService;
