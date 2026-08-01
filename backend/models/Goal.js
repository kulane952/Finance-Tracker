import mongoose from "mongoose";


const goalSchema = new mongoose.Schema({

title:{
type:String,
required:true
},


targetAmount:{
type:Number,
required:true
},


currentAmount:{
type:Number,
default:0
},


deadline:{
type:Date
},


createdBy:{
type:mongoose.Schema.Types.ObjectId,
ref:"User",
required:true
}


},{
timestamps:true
});


export default mongoose.model("Goal",goalSchema);