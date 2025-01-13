import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({
	username:{
		type:String,
		required:true,
		unique:true,
		lowercase:true,
		min:[5,"username should be atleast 5 characters"]
	},
	email:{
		type:String,
		required:true,
		unique:true,
		lowercase:true
	},
	password:{
		type:String,
		required:true,
		unique:true,
		lowercase:true
	}
},{timestamps:true})

 export const user =mongoose.model('user',userSchema);
