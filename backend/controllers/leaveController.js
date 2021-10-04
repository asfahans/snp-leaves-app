import asyncHandler from 'express-async-handler'
//
import Leave from '../models/leaveModel.js'

// @desc    Apply Leave
// @route   POST /api/leaves
// @access  Private
const createLeave = asyncHandler(async (req, res) => {
	const { fromDate, toDate, reason } = req.body

	const leave = new Leave({
		user: req.user._id,
		fromDate,
		toDate,
		reason,
	})

	const createdLeave = await leave.save()
	res.status(201).json(createdLeave)
})

// @desc    Get all leaves
// @route   GET /api/leaves
// @access  Private/Admin
const getLeaves = asyncHandler(async (req, res) => {
	const leaves = await Leave.find({})
		.populate('user', 'name designation department')
		.sort({ createdAt: -1 })
	res.json(leaves)
})

// @desc    Get logged in user leaves
// @route   GET /api/leaves/myleaves
// @access  Private
const getMyLeaves = asyncHandler(async (req, res) => {
	const leaves = await Leave.find({ user: req.user._id })
		.populate('user', 'name designation department')
		.sort({ createdAt: -1 })
	res.json(leaves)
})

export { createLeave, getLeaves, getMyLeaves }
