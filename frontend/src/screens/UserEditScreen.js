import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
//
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetails, updateUser } from '../redux/actions/userActions'
import FormContainer from '../components/FormContainer'
import { USER_UPDATE_RESET } from '../redux/constants/userConstants'

const UserEditScreen = ({ match, history }) => {
	const userId = match.params.id

	const [title, setTitle] = useState('')
	const [name, setName] = useState('')
	const [mobile, setMobile] = useState('')
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
	const [isActive, setIsActive] = useState(false)

	const dispatch = useDispatch()

	const userDetails = useSelector((state) => state.userDetails)
	const { loading, error, user } = userDetails

	const userUpdate = useSelector((state) => state.userUpdate)
	const {
		loading: loadingUpdate,
		error: errorUpdate,
		success: successUpdate,
	} = userUpdate

	useEffect(() => {
		if (successUpdate) {
			dispatch({ type: USER_UPDATE_RESET })
			history.push('/admin/userlist')
		} else {
			if (!user.name || user._id !== userId) {
				dispatch(getUserDetails(userId))
			} else {
				setTitle(user.title)
				setName(user.name)
				setMobile(user.mobile)
				setAddress(user.address)
				setPersonalEmail(user.personalEmail)
				setOfficialEmail(user.officialEmail)
				setGender(user.gender)
				setMaritalStatus(user.maritalStatus)
				setDepartment(user.department)
				setDesignation(user.designation)
				setCompany(user.company)
				setEmployedSince(user.employedSince)
				setWorkTimings(user.workTimings)
				setReportingTo(user.reportingTo)
				setIsEmployer(user.isEmployer)
				setIsAdmin(user.isAdmin)
				setIsActive(user.isActive)
			}
		}
	}, [user, userId, dispatch, successUpdate, history])

	const submitHandler = (e) => {
		e.preventDefault()
		dispatch(
			updateUser({
				_id: userId,
				title,
				name,
				mobile,
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
		)
	}

	return (
		<>
			<Link to="/admin/userlist" className="btn btn-light my-3">
				Go Back
			</Link>
			<FormContainer>
				<h4>Edit User</h4>
				{loadingUpdate && <Loader />}
				{errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
				{loading ? (
					<Loader />
				) : error ? (
					<Message variant="danger">{error}</Message>
				) : (
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
							<Form.Check
								type="checkbox"
								label="Is Employer"
								checked={isEmployer}
								onChange={(e) => setIsEmployer(e.target.checked)}
							></Form.Check>
						</Form.Group>

						<Form.Group controlId="isAdmin">
							<Form.Check
								type="checkbox"
								label="Is Admin"
								checked={isAdmin}
								onChange={(e) => setIsAdmin(e.target.checked)}
							></Form.Check>
						</Form.Group>

						<Form.Group controlId="isActive">
							<Form.Check
								type="checkbox"
								label="Is Active"
								checked={isActive}
								onChange={(e) => setIsActive(e.target.checked)}
							></Form.Check>
						</Form.Group>

						<Button type="submit" variant="primary" className="mt-3">
							Update
						</Button>
					</Form>
				)}
			</FormContainer>
		</>
	)
}

export default UserEditScreen
