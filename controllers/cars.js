const Car = require('../models/Car.js')

const getCar = (req, res) => {
    Car.findAll().then(e => res.json({"Sucess:":true, "Data":e}))
}

const getSingleCar = (req, res) => {
    Car.findOne({ where : {id:req.params.id}}).then(e => res.json({"Sucess:":true, "Data":e}))
}

const createSingleCar = (req, res) => {
    Car.build(req.body).save()
    res.json({"Sucess":true, "Data":req.body})
}

const updateSingleCar = (req, res) => {
    Car.findOne({where : {id:req.params.id}}).then(e => {e.update(req.body); res.json({"Sucess":true, "Data":e})})
}

const deleteSingleCar = (req, res) => {
    Car.destroy({ where : {id:req.params.id}})
    res.json({"Sucess":true, "Data":res.body})
}

module.exports = {
    getCar,
    getSingleCar,
    createSingleCar,
    updateSingleCar,
    deleteSingleCar
}