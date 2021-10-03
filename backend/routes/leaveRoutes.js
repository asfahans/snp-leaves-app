import express from 'express'
const router = express.Router()
//
import { createLeave, getLeaves } from '../controllers/leaveController.js'
import { protect, admin } from '../middlewares/authMiddleware.js'

router.get('/', protect, admin, getLeaves)
router.post('/', protect, createLeave)

export default router
