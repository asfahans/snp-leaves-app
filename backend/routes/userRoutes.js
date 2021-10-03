import express from 'express'
const router = express.Router()
//
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from '../controllers/userController.js'
import { protect, admin } from '../middlewares/authMiddleware.js'

router.post('/', registerUser)
router.get('/', protect, admin, getUsers)
router.get('/profile', protect, getUserProfile)
router.put('/profile', protect, updateUserProfile)
router.get('/:id', protect, admin, getUserById)
router.put('/:id', protect, admin, updateUser)
router.post('/login', authUser)
router.delete('/:id', protect, admin, deleteUser)

export default router
