const { Op } = require('sequelize');

const {City}= require('../models/index');

class Cityrepository{
    async createCity({ name }){
        try{
            const city = await City.create({name});
            return city;
        } catch(error) {
            throw {error};
        }
    }

    async deleteCity(cityId){
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        } catch (error){
            throw {error};
        }
    }
    async updatecity(cityId, data){
        try {
            const city= await City.update(data, {
                where: {
                    id: cityId
                }
            });
            return city;

        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }

    async getcity(cityId){
        try {
            const city= await City.findByPk(cityId);
            return city;
        } catch(error){
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }

    async getAllCities(filter) {
        try {
            if(filter.name) {
                const cities = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }
}

module.exports = Cityrepository