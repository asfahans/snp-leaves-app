import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		mobile: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
		personalEmail: {
			type: String,
			required: true,
			unique: true,
		},
		officialEmail: {
			type: String,
			required: true,
			unique: true,
		},
		gender: {
			type: String,
			required: true,
		},
		maritalStatus: {
			type: String,
			required: true,
		},
		department: {
			type: String,
			required: true,
		},
		designation: {
			type: String,
			required: true,
		},
		company: {
			type: String,
			required: true,
		},
		employedSince: {
			type: Number,
			required: true,
		},
		workTimings: {
			type: String,
			required: true,
		},
		reportingTo: {
			type: String,
			required: true,
		},
		isEmployer: {
			type: Boolean,
			required: true,
			default: false,
		},
		isAdmin: {
			type: Boolean,
			required: true,
			default: false,
		},
		isActive: {
			type: Boolean,
			required: true,
			default: true,
		},
	},
	{
		timestamps: true,
	}
)

userSchema.methods.matchPassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		next()
	}

	const salt = await bcrypt.genSalt(10)
	this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('User', userSchema)

export default User
