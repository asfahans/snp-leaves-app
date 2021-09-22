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

	const userExists = await User.findOne({
		$or: [{ officialEmail }, { mobile }],
	})

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
		})
	} else {
		res.status(404)
		throw new Error('User not found')
	}
})

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id)

	if (user) {
		user.title = req.body.title || user.title
		user.name = req.body.name || user.name
		user.mobile = req.body.mobile || user.mobile
		user.address = req.body.address || user.address
		user.personalEmail = req.body.personalEmail || user.personalEmail
		user.gender = req.body.gender || user.gender
		user.maritalStatus = req.body.maritalStatus || user.maritalStatus
		user.department = req.body.department || user.department
		user.designation = req.body.designation || user.designation
		user.company = req.body.company || user.company
		user.employedSince = req.body.employedSince || user.employedSince
		user.workTimings = req.body.workTimings || user.workTimings
		user.reportingTo = req.body.reportingTo || user.reportingTo
		user.isEmployer = req.body.isEmployer || user.isEmployer
		user.isAdmin = req.body.isAdmin || user.isAdmin
		user.isActive = req.body.isActive || user.isActive

		if (req.body.password) {
			user.password = req.body.password
		}

		const updatedUser = await user.save()

		res.json({
			_id: updatedUser._id,
			title: updatedUser.title,
			name: updatedUser.name,
			mobile: updatedUser.mobile,
			address: updatedUser.address,
			personalEmail: updatedUser.personalEmail,
			officialEmail: updatedUser.officialEmail,
			gender: updatedUser.gender,
			maritalStatus: updatedUser.maritalStatus,
			department: updatedUser.department,
			designation: updatedUser.designation,
			company: updatedUser.company,
			employedSince: updatedUser.employedSince,
			workTimings: updatedUser.workTimings,
			reportingTo: updatedUser.reportingTo,
			isEmployer: updatedUser.isEmployer,
			isAdmin: updatedUser.isAdmin,
			isActive: updatedUser.isActive,
			token: generateToken(updatedUser._id),
		})
	} else {
		res.status(404)
		throw new Error('User not found')
	}
})

export { authUser, registerUser, getUserProfile, updateUserProfile }
