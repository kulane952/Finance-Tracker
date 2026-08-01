import Transaction from "../models/Transaction.js"


export const createTransaction = async (req, res, next) => {

  try {

    console.log("USER:", req.user);
    console.log("RESULT:", req.body);


    const transaction = await Transaction.create({

      ...req.body,

      date: req.body.date || new Date(),

      createdBy: req.user._id

    });


    res.status(201).json({

      success: true,

      data: transaction

    });


  } catch (error) {

    console.log(error);

    next(error);

  }

};


//get Transaction

export const getTransaction = async (req, res, next) => {
  try {
    const transactions = await Transaction.find({
      createdBy: req.user._id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: transactions.length,
      transactions,
    });
  } catch (error) {
    next(error);
  }
};


//monthly-summary Transaction

export const monthlySummary = async (req, res, next) => {
  try {
    const summary = await Transaction.aggregate([
      {
        $match: {
          createdBy: req.user._id,
        },
      },
      {
        $group: {
          _id: {
            category: "$category",
            type: "$type",
          },
          total: {
            $sum: "$amount",
          },
        },
      },
      {
        $project: {
          _id: 0,
          category: "$_id.category",
          type: "$_id.type",
          total: 1,
        },
      },
    ]);

    res.status(200).json({
      success: true,
      summary,
    });
  } catch (error) {
    next(error);
  }
};


//get categories

export const getCategories = async (req, res, next) => {
  try {
    const categories = await Transaction.distinct(
      "category",
      {
        createdBy: req.user._id,
      }
    );

    res.status(200).json({
      success: true,
      count: categories.length,
      categories,
    });
  } catch (error) {
    next(error);
  }
};



//upade tasks

export const updateTransaction=async(req,res,next)=>{
    try {
        const transaction=await Transaction.findByIdAndUpdate(
            {_id:req.params.id, createdBy:req.user._id},
            req.body,
            {new:true}

        );
        if(!transaction)return res.status(404).json({message:'Transaction not found'})
            res.json({message:'Transaction Upadte Sucesessfull'})
    } catch (error) {
        next(error)
        
    }
}


//delet Transaction

export const deleteTransaction=async(req,res,next)=>{
    try {
        const transaction=await Transaction.findOneAndDelete({
            _id:req.params.id,
            createdBy:req.user._id
        });
        if(!transaction)return res.status(404).json({
            message:'Transaction'
        })
        res.json({message:'Transaction Deleted'})
    } catch (error) {
        next(error)
        
    }
}


// get Dashboard



export const getDashboard = async(req,res,next)=>{

try{


const userId = req.user._id;



const transactions = await Transaction.find({
createdBy:userId
});



const income = transactions
.filter(t=>t.type==="income")
.reduce((sum,t)=>sum+t.amount,0);



const expense = transactions
.filter(t=>t.type==="expense")
.reduce((sum,t)=>sum+t.amount,0);



const balance = income - expense;



const recent = await Transaction.find({
createdBy:userId
})
.sort({
createdAt:-1
})
.limit(5);



const categories = await Transaction.aggregate([

{
$match:{
createdBy:userId
}
},


{
$group:{

_id:"$category",

total:{
$sum:"$amount"
}

}

}

]);



res.json({

success:true,

data:{

balance,

income,

expense,

recent,

categories

}

});


}catch(error){

next(error);

}


};