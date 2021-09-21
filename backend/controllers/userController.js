import asyncHandler from 'express-async-handler'
//
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
	const { officialEmail, password } = req.body

	const user = await User.findOne({ officialEmail })

	if (user && (await user.matchPassword(password))) {
		res.json({
			_id: user._id,
			name: user.name,
			officialEmail: user.officialEmail,
			isAdmin: user.isAdmin,
			token: generateToken(user._id),
		})
	} else {
		res.status(401)
		throw new Error('Invalid Email or Password')
	}
})

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
	const {
		title,
		name,
		mobile,
		password,
		address,
		personalEmail,
		officialEmail,
		gender,
		maritalStatus,
		department,
		designation,
		company,
		employedSince,
		workTimings,
		reportingTo,
		isEmployer,
		isAdmin,
		isActive,
	} = req.body

	const userExists = await User.findOne({ officialEmail })

	if (userExists) {
		res.status(400)
		throw new Error('User already exists')
	}

	const user = await User.create({
		title,
		name,
		mobile,
		password,
		address,
		personalEmail,
		officialEmail,
		gender,
		maritalStatus,
		department,
		designation,
		company,
		employedSince,
		workTimings,
		reportingTo,
		isEmployer,
		isAdmin,
		isActive,
	})

	if (user) {
		res.status(201).json({
			_id: user._id,
			title: user.title,
			name: user.name,
			mobile: user.mobile,
			address: user.address,
			personalEmail: user.personalEmail,
			officialEmail: user.officialEmail,
			gender: user.gender,
			maritalStatus: user.maritalStatus,
			department: user.department,
			designation: user.designation,
			company: user.company,
			employedSince: user.employedSince,
			workTimings: user.workTimings,
			reportingTo: user.reportingTo,
			isEmployer: user.isEmployer,
			isAdmin: user.isAdmin,
			isActive: user.isActive,
			token: generateToken(user._id),
		})
	} else {
		res.status(400)
		throw new Error('Invalid user details')
	}
})

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id)

	if (user) {
		res.json({
			_id: user._id,
			name: user.name,
			officialEmail: user.officialEmail,
			isAdmin: user.isAdmin,
		})
	} else {
		res.status(404)
		throw new Error('User not found')
	}
})

export { authUser, getUserProfile, registerUser }
