import allowedOrigins from '../config/allowedOrigins.js'

// This is a extra amount of security for 
// If the origin that is sending the request is in the allowedOrigins list, then set the header to 'Access-control-Allow-Credentials' to prevent
// getting a cors error because we are sending the cookie from the front end to the back end
// to prevent getting a cors error, we need to do this check and set the header
const credentials = (req, res, next) => {
    const origin = req.headers.origin

    if(allowedOrigins.includes(origin)){
        res.header('Access-Control-Allow-Credentials', true)
    }
    next()
}

export {credentials} 
