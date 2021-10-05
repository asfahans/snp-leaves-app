import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
//
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getLeaveDetails } from '../redux/actions/leaveActions'
import FormContainer from '../components/FormContainer'

const LeaveEditScreen = ({ match, history }) => {
	const leaveId = match.params.id

	const [fromDate, setFromDate] = useState('')
	const [toDate, setToDate] = useState('')
	const [reason, setReason] = useState('')
	const [type, setType] = useState('')
	const [message, setMessage] = useState(null)

	const dispatch = useDispatch()

	const getLeaveDetails = useSelector((state) => state.getLeaveDetails)
	const { loading, error, leave } = getLeaveDetails
	console.log(leave)

	const userUpdate = useSelector((state) => state.userUpdate)
	const {
		loading: loadingUpdate,
		error: errorUpdate,
		success: successUpdate,
	} = userUpdate

	useEffect(() => {
		dispatch(getLeaveDetails(leaveId))
		// if (successUpdate) {
		// 	dispatch({ type: USER_UPDATE_RESET })
		// 	history.push('/admin/userlist')
		// } else {
		// 	if (!user.name || user._id !== userId) {
		// 		dispatch(getUserDetails(userId))
		// 	} else {
		// 		setTitle(user.title)
		// 		setName(user.name)
		// 		setMobile(user.mobile)
		// 		setAddress(user.address)
		// 		setPersonalEmail(user.personalEmail)
		// 		setOfficialEmail(user.officialEmail)
		// 		setGender(user.gender)
		// 		setMaritalStatus(user.maritalStatus)
		// 		setDepartment(user.department)
		// 		setDesignation(user.designation)
		// 		setCompany(user.company)
		// 		setEmployedSince(user.employedSince)
		// 		setWorkTimings(user.workTimings)
		// 		setReportingTo(user.reportingTo)
		// 		setIsEmployer(user.isEmployer)
		// 		setIsAdmin(user.isAdmin)
		// 		setIsActive(user.isActive)
		// 	}
		// }
	}, [dispatch, leave])
	//}, [user, userId, dispatch, successUpdate, history])

	const submitHandler = (e) => {
		e.preventDefault()
		// dispatch(
		// 	updateUser({
		// 		_id: userId,
		// 		title,
		// 		name,
		// 		mobile,
		// 		address,
		// 		personalEmail,
		// 		officialEmail,
		// 		gender,
		// 		maritalStatus,
		// 		department,
		// 		designation,
		// 		company,
		// 		employedSince,
		// 		workTimings,
		// 		reportingTo,
		// 		isEmployer,
		// 		isAdmin,
		// 		isActive,
		// 	})
		// )
	}

	return (
		<>
			<Link to="/profile" className="btn btn-light my-3">
				Go Back
			</Link>
			<FormContainer>
				<h4>Edit Leave</h4>
				{loadingUpdate && <Loader />}
				{errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
				{loading ? (
					<Loader />
				) : error ? (
					<Message variant="danger">{error}</Message>
				) : (
					<Form onSubmit={submitHandler}>
						<Row>
							<Col>
								<Form.Group controlId="fromDate">
									<Form.Label>From Date</Form.Label>
									<Form.Control
										type="date"
										value={fromDate}
										onChange={(e) => setFromDate(e.target.value)}
									></Form.Control>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group controlId="toDate">
									<Form.Label>To Date</Form.Label>
									<Form.Control
										type="date"
										value={toDate}
										onChange={(e) => setToDate(e.target.value)}
									></Form.Control>
								</Form.Group>
							</Col>
						</Row>

						<Form.Group controlId="reason">
							<Form.Label>Reason</Form.Label>
							<Form.Control
								as="textarea"
								rows={12}
								placeholder="Enter Reason"
								value={reason}
								onChange={(e) => setReason(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Form.Group controlId="type">
							<Form.Label>Type</Form.Label>
							<Form.Control
								type="test"
								placeholder="Enter Type"
								value={type}
								onChange={(e) => setType(e.target.value)}
							></Form.Control>
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

export default LeaveEditScreen
