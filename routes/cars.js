const express = require('express')
const router = express.Router() 

const {
    getCar,
    getSingleCar,
    createSingleCar,
    updateSingleCar,
    deleteSingleCar
} = require('../controllers/cars.js')

router.get('/', getCar)
router.get('/:id', getSingleCar)
router.post('/', createSingleCar)
router.put('/:id', updateSingleCar)
router.delete('/:id', deleteSingleCar)

module.exports = router