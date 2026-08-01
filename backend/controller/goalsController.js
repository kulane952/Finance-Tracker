import Goal from "../models/Goal.js";



// CREATE

export const createGoal = async(req,res,next)=>{

try{


const goal = await Goal.create({

...req.body,

createdBy:req.user._id

});


res.status(201).json({

success:true,

data:goal

});


}catch(error){

next(error);

}

};





// GET

export const getGoals = async(req,res,next)=>{

try{


const goals = await Goal.find({

createdBy:req.user._id

});


res.json({

success:true,

goals

});


}catch(error){

next(error);

}

};





// DELETE

export const deleteGoal = async(req,res,next)=>{

try{


await Goal.findOneAndDelete({

_id:req.params.id,

createdBy:req.user._id

});


res.json({

success:true,

message:"Goal deleted"

});


}catch(error){

next(error);

}

};