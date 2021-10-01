import asyncHandler from 'express-async-handler'
//
import generateToken from '../utils/generateToken.js'
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
	res.status(201).json(leave)
})

export { createLeave }
