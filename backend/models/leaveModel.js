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
		hodApproval: {
			type: Boolean,
			require: true,
			default: false,
		},
		finalApproval: {
			type: Boolean,
			require: true,
			default: false,
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
