import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
//
import { notFound, errorHandler } from './middlewares/errorMiddleware.js'
import connectDB from './config/db.js'
//
import userRoutes from './routes/userRoutes.js'
import leaveRoutes from './routes/leaveRoutes.js'

dotenv.config()

//Database Connection
connectDB()

const app = express()

// Allows us to accept json data in body
app.use(express.json())

// Routes
app.get('/', (req, res) => {
	res.send('Api is running..')
})

app.use('/api/users', userRoutes)
app.use('/api/leaves', leaveRoutes)

// Not Found Middleware
app.use(notFound)

// Error Middleware
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
	5000,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT} `.yellow
			.underline.inverse
	)
)
