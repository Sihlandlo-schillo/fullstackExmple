// LEMME USE THE SHORT WAY OF IMPORTING pool
import {pool} from '../config/config.js'

const getUsersDB = async()=>{
    let [data] = await pool.query('SELECT * FROM users')
    return data
}

const getUserDB = async (username)=>{
    //add the [] on '[data]'for removing the array square bracket
    let [[data]] = await pool.query('SELECT * FROM users WHERE username = ?',[username])
    return data
}

const insertUserDB = async(user_name, surname,age,language,car,eye,username,password)=>{
    let [data] = await pool.query('INSERT INTO users (user_name, user_surname, age, fav_coding_lang,fav_car, eye_color, username, password) VALUES (?,?,?,?,?,?,?,?)',[user_name,surname,age,language,car,eye,username,password])
    return data
}

const deleteUserDB = async (id)=>{
    // we don't have to have 'let = [data] ...' as we only deleting, we don't want it to return anything as fetch
    let [data] = await pool.query('DELETE FROM peers WHERE fruits_id = ?',[id])
    return data
}

const updateUserDB = async (user_name,surname,age,language,car,eye, username,password, id)=>{
    let [data] = await pool.query('UPDATE peers SET user_name = ?, user_surname = ?, age = ?, fav_coding_lang = ?,fav_car = ?, eye_color = ?, username = ?, password = ?, WHERE users_id = ?', [user_name,surname,age,language,car,eye,username,password,id])
    return data
}

export {getUsersDB, getUserDB, insertUserDB, deleteUserDB, updateUserDB}