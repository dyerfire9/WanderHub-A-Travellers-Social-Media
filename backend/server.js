import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT || 3500

// import config files
import {corsOptions} from './config/corsOptions.js'
import {connectDB}  from './config/dbConn.js'

// import middleware
import {logger} from './middleware/logEvents.js'
import {errorHandler} from './middleware/errorHandler.js'
import {credentials} from './middleware/credentials.js'

// Call Express
const app = express()

// Middleware
app.use(express.urlencoded({ extended: true }))  
app.use(express.json())
app.use(cookieParser())

// Routers
app.get('/', (req, res) => {
    res.json({'message': 'Hi you are accessing the home page'})
})



// Middlware
app.use(logger)
app.use(credentials)
app.use(cors(corsOptions))


// Logic



// Error handler
app.use(errorHandler)


// Connect to MongoDB
connectDB()

// We are basically saying, listen to a event once, 'once' = connected to DB. 
// Only then we should listen to requests on the given PORT
mongoose.connection.once('open', () => {
    console.log('Connecting to MongoDB')
    // Start the server on the PORT and listen to any requests
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
