// Authenticate A USER

import { compare } from "bcrypt"
import { getUserDB } from "../model/usersDB.js"
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'


dotenv.config()

// const hashedPassword = 'password'

const checkUser = async (req,res,next)=>{
    const {username,password} = req.body
    let hashedPassword = (await getUserDB(username)).password
    console.log(hashedPassword);
    // let result = compare(password, hashedPassword)
    // if(result == true){
    //     next()
    // }else{
    //     res.send('Wrong Password Insertion')
    // }


    compare(password,hashedPassword,(err,result)=>{
        if(result==true){
            // 'secret' doesn't what you write there
            let token = jwt.sign({username:username},process.env.SECRET_KEY,{expiresIn:'1h'})
            // res.json({token})
            console.log(token);
            req.body.token = token
            
            next()
            return
        }
        res.send('Wrong Password')
    })
}
const verifyAToken = (req,res,next)=>{
    let {cookie} = req.headers
    // checks if the token exists first
    let token = cookie && cookie.split('=')[1]

    jwt.verify(token, process.env.SECRET_KEY,(err, decoded)=> {
        if(err){
            res.json({message:'Invalid Token'})
            return
        }else{
            req.body.user = decoded.username
            console.log(decoded);
            next()
        }
    })
}

export {checkUser, verifyAToken}