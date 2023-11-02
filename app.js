const port = 5000

const express = require('express')
const app = express()

app.use(express.json())

const cars = require('./routes/cars.js')

app.use('/api/v1/veiculos', cars)


app.listen(port, () => {console.log(`Server is listening on the port ${port}`)})