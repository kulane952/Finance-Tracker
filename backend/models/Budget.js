import mongoose from "mongoose";


const budgetSchema = new mongoose.Schema({

category:{
type:String,
required:true
},


limitAmount:{
type:Number,
required:true
},


createdBy:{
type:mongoose.Schema.Types.ObjectId,
ref:"User",
required:true
}


},{
timestamps:true
});


export default mongoose.model("Budget",budgetSchema);