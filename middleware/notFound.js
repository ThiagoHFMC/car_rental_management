const notFound = (res, req, next) => {
    next(Error("The route does not exist"))
}

module.exports = notFound