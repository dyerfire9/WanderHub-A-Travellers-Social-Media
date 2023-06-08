import allowedOrigins from './allowedOrigins.js'

const corsOptions = {    
    origin: (origin, callback) => {
        // allowedOrigins.indexOf(origin) !== -1 ---> means if the requesting website is in the allowedOrigins
        // /!origin ---> include the no-origin (undefined) as it is not in the allowedOrigins (REMOVE THIS POST DEVELOPMENT) 
        if (allowedOrigins.indexOf(origin) !== -1 || !origin){
            callback(null, true)
        }
        else{
            // Express by default has error handling
            callback(new Error('Not allowed by CORS'))
        }
    },
    optionsSuccessStatus: 200
}

export {corsOptions}