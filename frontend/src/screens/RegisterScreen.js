import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
//
import Message from '../components/Message'
import Loader from '../components/Loader'
import { register } from '../redux/actions/userActions'
import FormContainer from '../components/FormContainer'

const RegisterScreen = ({ location, history }) => {
	const [title, setTitle] = useState('')
	const [name, setName] = useState('')
	const [mobile, setMobile] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [address, setAddress] = useState('')
	const [personalEmail, setPersonalEmail] = useState('')
	const [officialEmail, setOfficialEmail] = useState('')
	const [gender, setGender] = useState('')
	const [maritalStatus, setMaritalStatus] = useState('')
	const [department, setDepartment] = useState('')
	const [designation, setDesignation] = useState('')
	const [company, setCompany] = useState('')
	const [employedSince, setEmployedSince] = useState('')
	const [workTimings, setWorkTimings] = useState('')
	const [reportingTo, setReportingTo] = useState('')
	const [isEmployer, setIsEmployer] = useState(false)
	const [isAdmin, setIsAdmin] = useState(false)
	const [message, setMessage] = useState(null)

	const dispatch = useDispatch()

	const userLogin = useSelector((state) => state.userLogin)
	const { loading, error, userInfo } = userLogin

	useEffect(() => {
		if (!userInfo || !userInfo.isAdmin) {
			history.push('/')
		}
	}, [dispatch, history, userInfo])

	const submitHandler = (e) => {
		e.preventDefault()
		if (
			title === '' ||
			name === '' ||
			mobile === '' ||
			password === '' ||
			confirmPassword === '' ||
			address === '' ||
			personalEmail === '' ||
			officialEmail === '' ||
			personalEmail === '' ||
			gender === '' ||
			maritalStatus === '' ||
			department === '' ||
			designation === '' ||
			company === '' ||
			employedSince === '' ||
			workTimings === '' ||
			reportingTo === ''
		) {
			setMessage('All fields are mandatory')
		} else if (password !== confirmPassword) {
			setMessage('Passwords do not match')
		} else {
			dispatch(
				register(
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
					isAdmin
				)
			)
		}
	}

	return (
		<FormContainer>
			<h1>Register</h1>
			{message && <Message variant="danger">{message}</Message>}
			{error && <Message variant="danger">{error}</Message>}
			{loading && <Loader />}
			<Form onSubmit={submitHandler}>
				<Form.Group controlId="title">
					<Form.Label>Title</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter Title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					></Form.Control>
				</Form.Group>

				<Form.Group controlId="name">
					<Form.Label>Name</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					></Form.Control>
				</Form.Group>

				<Form.Group controlId="mobile">
					<Form.Label>Mobile</Form.Label>
					<Form.Control
						type="number"
						placeholder="Enter Mobile"
						value={mobile}
						onChange={(e) => setMobile(e.target.value)}
					></Form.Control>
				</Form.Group>

				<Form.Group controlId="password">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Enter Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					></Form.Control>
				</Form.Group>

				<Form.Group controlId="confirmPassword">
					<Form.Label>Confirm Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Enter Confirm Password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					></Form.Control>
				</Form.Group>

				<Form.Group controlId="address">
					<Form.Label>Address</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter Address"
						value={address}
						onChange={(e) => setAddress(e.target.value)}
					></Form.Control>
				</Form.Group>

				<Form.Group controlId="personalEmail">
					<Form.Label>Personal Email</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter Personal Email"
						value={personalEmail}
						onChange={(e) => setPersonalEmail(e.target.value)}
					></Form.Control>
				</Form.Group>

				<Form.Group controlId="officialEmail">
					<Form.Label>Official Email</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter Official Email"
						value={officialEmail}
						onChange={(e) => setOfficialEmail(e.target.value)}
					></Form.Control>
				</Form.Group>

				<Form.Group controlId="gender">
					<Form.Label>Gender</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter Gender"
						value={gender}
						onChange={(e) => setGender(e.target.value)}
					></Form.Control>
				</Form.Group>

				<Form.Group controlId="maritalStatus">
					<Form.Label>Marital Status</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter Marital Status"
						value={maritalStatus}
						onChange={(e) => setMaritalStatus(e.target.value)}
					></Form.Control>
				</Form.Group>

				<Form.Group controlId="department">
					<Form.Label>Department</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter Department"
						value={department}
						onChange={(e) => setDepartment(e.target.value)}
					></Form.Control>
				</Form.Group>

				<Form.Group controlId="designation">
					<Form.Label>Designation</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter Designation"
						value={designation}
						onChange={(e) => setDesignation(e.target.value)}
					></Form.Control>
				</Form.Group>

				<Form.Group controlId="company">
					<Form.Label>Company</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter Company"
						value={company}
						onChange={(e) => setCompany(e.target.value)}
					></Form.Control>
				</Form.Group>

				<Form.Group controlId="employedSince">
					<Form.Label>Employed Since</Form.Label>
					<Form.Control
						type="number"
						placeholder="Enter Employed Since"
						value={employedSince}
						onChange={(e) => setEmployedSince(e.target.value)}
					></Form.Control>
				</Form.Group>

				<Form.Group controlId="workTimings">
					<Form.Label>Work Timings</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter Work Timings"
						value={workTimings}
						onChange={(e) => setWorkTimings(e.target.value)}
					></Form.Control>
				</Form.Group>

				<Form.Group controlId="reportingTo">
					<Form.Label>Reporting To</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter Reporting To"
						value={reportingTo}
						onChange={(e) => setReportingTo(e.target.value)}
					></Form.Control>
				</Form.Group>

				<Form.Group controlId="isEmployer">
					<Form.Label>Is Employer</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter Is Employer"
						value={isEmployer}
						onChange={(e) => setIsEmployer(e.target.value)}
					></Form.Control>
				</Form.Group>

				<Form.Group controlId="isAdmin">
					<Form.Label>Is Admin</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter Is Admin"
						value={isAdmin}
						onChange={(e) => setIsAdmin(e.target.value)}
					></Form.Control>
				</Form.Group>

				<Button type="submit" variant="primary">
					Register
				</Button>
			</Form>
		</FormContainer>
	)
}

export default RegisterScreen
