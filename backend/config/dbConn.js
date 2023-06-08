import mongoose from 'mongoose'

// We set up a connection function
const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.DATABASE_URI, {
            useUnifiedTopology: true,   // These are options that will prevent warnings
            useNewUrlParser: true   // These are options that will prevent warnings
        })
    }
    catch(err){
        console.error(err)
    }
}

export {connectDB}