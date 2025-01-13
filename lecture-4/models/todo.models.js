import mongoose from "mongoose";
import { subtodo } from "./subtodo.models";

const todoSchema= new mongoose.Schema({
               createdBy:{
				type:mongoose.Schema.Types.ObjectId,
				ref:'user'
			   },
			   subtodo:[
				{
					type:mongoose.Schema.Types.ObjectId,
					ref:'subtodo'
				}
			   ]
			      
               
                
})

export const todo=mongoose.model('todo',todoSchema);