const {FlightRepository, AirplaneRepository } = require('../repository/index');
const { compareTime } = require('../utils/helper');

class FlightService {

    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightrepository = new FlightRepository();
    }


    async createFlight(data) {
        try {
            if(!compareTime(data.arrivalTime, data.departureTime)) {
                throw{error: 'Arrival time cannot be less than departure time'}
            }
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
    

    async getAllFlightsData(data) {
        try {
            const flights = await this.flightrepository.getAllFlights(data);
            return flights;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw{error};
        }

    }
}
module.exports=FlightService;
