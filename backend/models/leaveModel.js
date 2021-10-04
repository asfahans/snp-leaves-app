import mongoose from 'mongoose'

const leaveSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
		fromDate: {
			type: Date,
			required: true,
		},
		toDate: {
			type: Date,
			required: true,
		},
		reason: {
			type: String,
			required: true,
		},
		type: {
			type: Number,
			required: true,
			default: 1,
		},
		hodApproval: {
			type: String,
			require: true,
			default: 'Pending',
		},
		finalApproval: {
			type: String,
			require: true,
			default: 'Pending',
		},
		applicationResent: {
			type: Boolean,
			require: true,
			default: false,
		},
	},
	{
		timestamps: true,
	}
)

const Leave = mongoose.model('Leave', leaveSchema)

export default Leave
