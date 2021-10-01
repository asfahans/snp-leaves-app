import express from 'express'
const router = express.Router()
//
import { createLeave } from '../controllers/leaveController.js'
import { protect } from '../middlewares/authMiddleware.js'

router.post('/', protect, createLeave)

export default router
