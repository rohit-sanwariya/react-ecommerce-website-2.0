import  mongoose  from "mongoose";
import dotenv from 'dotenv'



dotenv.config()

const uri = process.env.MONGO_URI

const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(uri,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
            useCreteIndex:true,
        })
        console.log(`connected mongoDb host:,${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit()
    }
}


export default connectDB;