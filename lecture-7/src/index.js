import express from 'express'
import dotenv from 'dotenv'
import dbconnect from './db/index.js'
dotenv.config()	


dbconnect()
















// const app=express();
// ;(async ()=>{
// 	try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
// 		app.on('error',(error)=>{
// 			console.log(error)
// 			throw error
// 		})
// 		app.listen(process.env.PORT,()=>{
// 			console.log(`server is running on ${process.env.PORT}`)
// 		})
// 		console.log(`database is connected `)
// 	}
// 	catch(error){
//      console.log(error);
// 	 throw error
// 	}
// })()