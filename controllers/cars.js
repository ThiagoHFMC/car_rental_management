const Car = require('../models/Car.js')
const asyncWrapper = require('../middleware/async.js')

const getCars = asyncWrapper(async (req, res) => {
    const cars = await Car.findAll()
    res.status(200).json({ cars })
})

const getSingleCar = asyncWrapper(async (req, res, next) => {
    const car = await Car.findOne({where : { id:req.params.id }})
    if (!car) {
        return next(Error("No car was found to be shown"))
    }

    res.status(200).json({ car })
})

const createSingleCar = asyncWrapper(async (req, res) => {
    const car = await Car.build(req.body).save()

    console.log("Chegou alguma coisa")
    console.log("Requision Server Side: ", req.body)

    res.status(201).json({ car })
})

const updateSingleCar = asyncWrapper(async (req, res, next) => {
    const car = await Car.findOne({where : { id:req.params.id }})
    console.log("Vamos atualizar...")
    console.log(req.body)
    if (!car) {
        return next(Error("No car was found to be updated"))
    }

    car.update(req.body)
    res.status(200).json({ car })
})

const deleteSingleCar = asyncWrapper(async (req, res, next) => {
    const car = await Car.destroy({where : { id:req.params.id }})

    if (!car) {
        return next(new Error("No car was found to be deleted"))
    }

    res.status(200).json({ car })
})

module.exports = {
    getCars,
    getSingleCar,
    createSingleCar,
    updateSingleCar,
    deleteSingleCar
}