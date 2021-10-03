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
  const leaves = await Leave.find({}).populate(
    'user',
    'name designation department'
  )
  res.json(leaves)
})

export { createLeave, getLeaves }
