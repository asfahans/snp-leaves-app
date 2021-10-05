import express from 'express'
const router = express.Router()
//
import {
	createLeave,
	getLeaves,
	getMyLeaves,
	getLeaveById,
	updateLeave,
} from '../controllers/leaveController.js'
import { protect, admin } from '../middlewares/authMiddleware.js'

router.get('/', protect, admin, getLeaves)
router.get('/myleaves', protect, getMyLeaves)
router.post('/', protect, createLeave)
router.get('/:id', protect, getLeaveById)
router.put('/:id', protect, updateLeave)

export default router
