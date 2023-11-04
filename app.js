const port = 5000

const express = require('express')
const app = express()

const notFound = require('./middleware/notFound.js')
const errorHandler = require('./middleware/errorHandler.js')

app.use(express.json())

const cars = require('./routes/cars.js')

app.use('/api/v1/veiculos', cars)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {console.log(`Server is listening on the port ${port}`)})