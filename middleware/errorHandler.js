const errorHandler = (err, req, res, next) => {
    return res.status(404).json({ msg: err.message })
  }

module.exports = errorHandler