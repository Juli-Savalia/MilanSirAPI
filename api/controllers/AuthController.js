const UserModel = require('../models/UserModel');

const User = require('../models/UserModel');

const jwt = require('jsonwebtoken')


const registerUser = async(req,res) => {
    try{
        const {name,email,password} = req.body;
        const users = await User.create({
            name : name,
            email : email,
            password : password,
        })
        return res.status(200).send({
            success : true,
            message : "User created successfully",
            users
        })
    }catch(err){
        console.log(err);
        return false;
    }
}
const login = async(req,res) => {
    try{
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).send({
                success : false,
                message : "Please enter both email and password"
            })
            
        }
       const user = await User.findOne({email:email});
       if(!user || user.password != password){
        return res.status(401).send({
            success : false,
            message : "Email and Password not valid"
        })
       }

       let token = jwt.sign({payload:user},"juliforam",{expiresIn:'3hr'});
       //
        return res.status(200).send({
            success : true,
            message : "User Login successfully",
            token
            
        })
    }catch(err){
        console.log(err);
        return false;
    }
}
module.exports = {
    registerUser,login
}