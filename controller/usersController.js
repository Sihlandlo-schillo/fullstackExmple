// import exp from 'constants'
import {getUsersDB, getUserDB, insertUserDB, deleteUserDB,updateUserDB} from '../model/usersDB.js'
import {hash} from 'bcrypt'


const fetchUsers = async(req,res)=>{
    res.json(await getUsersDB())
}
const getUser = async(req,res)=>{
    res.json(await getUserDB(req.params.id))
}
const insertUser = async(req,res)=>{
    // console.log(req.headers.cookie.split('=')[1]);
    
    let {name,surname,age,language,car,eye,username,password}  = req.body
    // (password, salt)
    hash(password,10,async(err,hashedP)=>{
        if(err) throw err
        console.log(hashedP);
        
        await insertUserDB(name,surname,age,language,car,eye,username, hashedP)
    })
    res.send('Data was inserted successfully')
}
const deleteUser = async(req,res)=>{
    res.json(await deleteUserDB(req.params.id))
}
const updateUser = async(req,res)=>{
    res.json(await updateUserDB(req.params.id))
}
const loginUser = async(req,res)=>{
    res.json({message:"You have signed In Successfully",token:req.body.token})
}


export {fetchUsers, getUser,insertUser,deleteUser,updateUser,loginUser}