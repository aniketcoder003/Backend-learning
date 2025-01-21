import mongoose  from "mongoose";
import { DB_NAME } from "../constants.js";

const dbconnect = async ()=>{
	try{
 await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
  console.log('connected')
 
	}
	catch(error){
   console.log(error)
   throw error
	}
}

export default dbconnect;