import User from "../models/user.js";
import Transaction from "../models/Transaction.js";


// Admin Dashboard data

export const getAdminDashboard = async (req, res) => {
  try {

    const users = await User.countDocuments();

    const transactions = await Transaction.countDocuments();


    res.json({
      success: true,
      data: {
        totalUsers: users,
        totalTransactions: transactions
      }
    });


  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};



// Get all users

export const getAllUsers = async (req, res) => {
  try {

    const users = await User.find()
      .select("-password");


    res.json({
      success: true,
      users
    });


  } catch (error) {

    res.status(500).json({
      success:false,
      message:error.message
    });

  }
};



// Get all Transactions

export const getAllTransactions = async (req, res) => {
  try {

    const transactions = await Transaction.find()
      .populate("createdBy", "name email");


    res.json({
      success:true,
      transactions
    });


  } catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    });

  }
};



//

export const updateUserStatus = async(req,res)=>{

    try{

        const user = await User.findById(req.params.id);

        if(!user){
            return res.status(404).json({
                success:false,
                message:"User not found"
            });
        }


        user.isActive = !user.isActive;

        await user.save();


        res.json({
            success:true,
            message:"User status updated",
            user:{
                _id:user._id,
                name:user.name,
                email:user.email,
                role:user.role,
                isActive:user.isActive
            }
        });


    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }
};


///



export const getAdminAnalytics = async(req,res)=>{

try{


const totalUsers =
await User.countDocuments();


const totalTransactions =
await Transaction.countDocuments();



const income =
await Transaction.aggregate([
{
 $match:{
  type:"income"
 }
},
{
 $group:{
  _id:null,
  total:{
   $sum:"$amount"
  }
 }
}
]);



const expense =
await Transaction.aggregate([
{
 $match:{
  type:"expense"
 }
},
{
 $group:{
  _id:null,
  total:{
   $sum:"$amount"
  }
 }
}
]);



res.json({

success:true,

analytics:{


totalUsers,

totalTransactions,


totalIncome:
income[0]?.total || 0,


totalExpense:
expense[0]?.total || 0



}


});


}catch(error){

res.status(500).json({

success:false,
message:error.message

})

}

}