import express from 'express'
import {fetchFruits,getFruit, insertFruit, deleteFruit, updateFruit,addToCart} from '../controller/fruitController.js'
import { verifyAToken } from '../middleware/middlewareAuthentication.js'
import { addToCartDB } from '../model/fruitDB.js'

const router = express.Router()

router.post('/cart',verifyAToken, addToCart)

router.get('/',verifyAToken, fetchFruits)
router.get('/:id',getFruit)
router.post('/insert',insertFruit)
router.delete('/:id', deleteFruit)
router.patch('/:id', updateFruit)


export default router