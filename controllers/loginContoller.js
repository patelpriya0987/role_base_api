const userModel = require('../models/user/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const loginController = async (req , res) => {

    const {name , email , password} = req.body
    const user = await userModel.findOne({email})
    
    if(user){
        const match = await bcrypt.compare(password , user.password)
        if(match){
            const token = jwt.sign({id:user} , 'mySecret' );
            console.log("token ",token);
            res.json({'msg':'login succefully...'})
        }else{
            res.json({'msg': 'password not matchedd'})
        }
    }
}

module.exports = {loginController}