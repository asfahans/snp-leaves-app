import express from 'express'
const router = express.Router()
//
import {
	authUser,
	getUserProfile,
	registerUser,
	updateUserProfile,
} from '../controllers/userController.js'
import { protect } from '../middlewares/authMiddleware.js'

router.post('/', registerUser)
router.post('/login', authUser)
router.get('/profile', protect, getUserProfile)
router.put('/profile', protect, updateUserProfile)

export default router
