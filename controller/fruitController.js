import {getFruitsDB, getFruitDB, insertFruitDB, deleteFruitDB, updateFruitDB, addToCartDB} from '../model/fruitDB.js'
import { getUserDB } from '../model/usersDB.js'

const fetchFruits = async(req,res)=>{
    res.json(await getFruitsDB())
}
const getFruit = async(req,res)=>{
    res.json(await getFruitDB(req.params.id))
}
const insertFruit = async(req,res)=>{
    let {fruit_name,weight,amount}  = req.body
        res.send('Data was inserted successfully')
        await insertFruitDB(fruit_name,weight,amount)
}
const deleteFruit = async(req,res)=>{
    res.json(await deleteFruitDB(req.params.id))
}
const updateFruit = async(req,res)=>{
    res.json(await updateFruitDB(req.params.id))
}
const addToCart = async(req,res)=>{
    console.log(req.body);
    let {users_id} = await getUserDB(req.body.user)
    console.log(users_id);
    
    await addToCartDB(req.body.id, users_id)
    res.json({message:'You have added an item to cart'})
}





export {fetchFruits, getFruit, insertFruit, deleteFruit, updateFruit, addToCart}