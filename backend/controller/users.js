import User from "../models/user.js"



export const getUserss=async(req,res)=>{
    const userss=await User.find();
    res.json(userss)
};

export const getUserInfo=async(req,res)=>{
    const user=await User.findById(req.pramas.id)

    if(!user) return res.status(404).json({message:'User not found'})
};

//cerate a new users

export const createUser=async(req,res)=>{
    const user=new User(req.body);
    const saveUser=await user.save()
    res.status(201).json(saveUser)
}