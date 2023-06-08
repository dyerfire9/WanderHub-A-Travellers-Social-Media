// We put this in its own file because, we will use it in middleware aswell, so we can just modify this file if we need to.

const allowedOrigins = [
    'https://www.yoursite.com',
    'http://127.0.0.1:5500',
    'http://localhost:3500'
]

export default allowedOrigins