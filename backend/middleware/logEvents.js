import { format } from 'date-fns';
import { v4 as uuid } from 'uuid';
import fs from 'fs';
import { promises as fsPromises } from 'fs';
import path from 'path';

// This file is to log things to the console
const logEvents = async (message, logName) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`
    console.log(logItem)

    try {
        // We first create a directory called logs that will house our log data
        if(!fs.existsSync(path.join(__dirname, '..', 'logs'))){
            await fsPromises.mkdir(path.join(__dirname, '..', 'logs'))
        }
        // We create/add to a file in the log directory called eventLog
        // it will store the logItem
        await fsPromises.appendFile(path.join(__dirname, '..','logs', logName), logItem)
    } catch (error) {
        console.log(error)
    }
}

const logger = (req, res, next) => {
    // Will show us the type of request, who is sending it (what website/page)
    // and the url that was requested
    // req.method - the HTTP request type (GET, POST, etc)
    // req.url - the url that is sending the request
    const message = `${req.method}\t${req.headers.origin}\t${req.url}`
    logEvents(message, 'reqLog.txt')

    console.log(`${req.method} ${req.path}`)

    // If we have long functions in the middleware, we
    // can create a folder called middleware and put the functions
    // in there (like we have done here)
    next()
}


export {logger}