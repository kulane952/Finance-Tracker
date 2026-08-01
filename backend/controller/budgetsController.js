import Budget from "../models/Budget.js";


// CREATE

export const createBudget = async(req,res,next)=>{

try{


const budget = await Budget.create({

...req.body,

createdBy:req.user._id

});


res.status(201).json({

success:true,

data:budget

});


}catch(error){

next(error);

}

};



// GET

export const getBudgets = async(req,res,next)=>{

try{


const budgets = await Budget.find({

createdBy:req.user._id

});


res.json({

success:true,

budgets

});


}catch(error){

next(error);

}

};




// DELETE

export const deleteBudget = async(req,res,next)=>{

try{


await Budget.findOneAndDelete({

_id:req.params.id,

createdBy:req.user._id

});


res.json({

success:true,

message:"Budget deleted"

});


}catch(error){

next(error);

}

};


//upade 
export const updateBudget = async(req,res,next)=>{

try{


const budget = await Budget.findOneAndUpdate(

{
_id:req.params.id,
createdBy:req.user._id
},


req.body,


{
new:true
}

);



res.json({

success:true,

data:budget

});


}catch(error){

next(error);

}

};