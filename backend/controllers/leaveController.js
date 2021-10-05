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

// @desc    Get leave by id
// @route   GET /api/leaves/:id
// @access  Private
const getLeaveById = asyncHandler(async (req, res) => {
	const leave = await Leave.findById(req.params.id)

	if (leave) {
		res.json(leave)
	} else {
		res.status(404)
		throw new Error('User not found')
	}
})

// @desc    Update leave
// @route   PUT /api/leaves/:id/edit
// @access  Private
const updateLeave = asyncHandler(async (req, res) => {
	const leave = await Leave.findById(req.params.id)

	if (leave) {
		leave.fromDate = req.body.fromDate || leave.fromDate
		leave.toDate = req.body.toDate || leave.toDate
		leave.reason = req.body.reason || leave.reason

		const updatedLeave = await leave.save()

		res.json({
			_id: updatedLeave._id,
			fromDate: updatedLeave.fromDate,
			toDate: updatedLeave.toDate,
			reason: updatedLeave.reason,
		})
	} else {
		res.status(404)
		throw new Error('Leave not found')
	}
})

export { createLeave, getLeaves, getMyLeaves, getLeaveById, updateLeave }
