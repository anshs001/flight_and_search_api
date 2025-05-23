const city = require('../models/city');
const { Cityrepository } = require('../repository/index');

class CityService {
    constructor() {
        this.cityRepository = new Cityrepository();
    }

    async createCity(data) {
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw {error};
        }

    }

    async deleteCity(cityId){
        try {
            const response = this.cityRepository.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw {error};
        }

    }

    async updateCity(cityId, data) {
        try {
            const city = await this.cityRepository.updatecity(cityId, data);
            return city;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw {error};
        }

    }

    async getCity(cityId){
        try {
            const city = await this.cityRepository.getcity(cityId);
            return city;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw {error};
        }

    }

    async getAllCities(filter) {
        try {
            const cities = await this.cityRepository.getAllCities({name: filter.name});
            return cities;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw {error};
        }
    }
}

module.exports = CityService;