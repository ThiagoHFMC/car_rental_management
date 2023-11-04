const Car = require('../models/Car.js')
const asyncWrapper = require('../middleware/async.js')

const getCar = asyncWrapper(async (req, res) => {
    const cars = await Car.findAll()
    res.status(200).json({ cars })
})

const getSingleCar = asyncWrapper(async (req, res, next) => {
    const car = await Car.findOne({where : { id:req.params.id }})
    if (!car) {
        return next(Error("No task was found to be shown"))
    }

    res.status(200).json({ car })
})

const createSingleCar = asyncWrapper(async (req, res) => {
    const car = await Car.build(req.body).save()
    res.status(201).json({ car })
})

const updateSingleCar = asyncWrapper(async (req, res, next) => {
    const car = await Car.findOne({where : { id:req.params.id }})

    if (!car) {
        return next(Error("No task was found to be updated"))
    }

    car.update(req.body)
    res.status(200).json({ car })
})

const deleteSingleCar = asyncWrapper(async (req, res, next) => {
    const car = await Car.destroy({where : { id:req.params.id }})

    if (!car) {
        return next(new Error("No task was found to be deleted"))
    }

    res.status(200).json({ car })
})

module.exports = {
    getCar,
    getSingleCar,
    createSingleCar,
    updateSingleCar,
    deleteSingleCar
}