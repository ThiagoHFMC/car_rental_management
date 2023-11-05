const port = 5000

const express = require('express')
const app = express()

const path = require('path')
const cors = require('cors')

const notFound = require('./middleware/notFound.js')
const errorHandler = require('./middleware/errorHandler.js')


app.use(cors())
app.use(express.json())
app.use(express.static('./public'))

const cars = require('./routes/cars.js')

app.use('/api/v1/veiculos', cars)

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {console.log(`Server is listening on the port ${port}`)})