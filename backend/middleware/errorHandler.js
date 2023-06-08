// We will also log any errors if we encounter it
import {logger} from './logEvents.js'

// Notice that it also has err (error) as the parameter
// TEMPLATE
const errorHandler = (err, req, res, next) => {
    // err.name - The error name
    // err.message - The error method
    logger(`${err.name}: ${err.message}`, 'errorLog.txt')
    console.error(err.stack)
    res.status(500).send(err.message)
}

export {errorHandler}