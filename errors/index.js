const CustomAPIError = require('./custom-api')
const BadRequestError = require('./bad-request')
const UnauthorizedError = require('./unauthorized')
const NotFoundError = require('./not-found')

module.exports = {
    CustomAPIError,
    UnauthorizedError,
    BadRequestError,
    NotFoundError
}