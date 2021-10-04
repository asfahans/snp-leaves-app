import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
//
import Message from '../components/Message'
import Loader from '../components/Loader'
import { createLeave } from '../redux/actions/leaveActions'
import FormContainer from '../components/FormContainer'
import { LEAVE_CREATE_RESET } from '../redux/constants/leaveConstants'

const LeaveCreateScreen = ({ location, history }) => {
	const [fromDate, setFromDate] = useState('')
	const [toDate, setToDate] = useState('')
	const [reason, setReason] = useState('')
	const [type, setType] = useState('')
	const [message, setMessage] = useState(null)

	const dispatch = useDispatch()

	const userLogin = useSelector((state) => state.userLogin)
	const { userInfo } = userLogin

	const leaveCreate = useSelector((state) => state.leaveCreate)
	const { loading, error, success, leave } = leaveCreate

	useEffect(() => {
		dispatch({ type: LEAVE_CREATE_RESET })

		if (!userInfo) {
			history.push('/')
		}

		if (success) {
			history.push('/dashboard')
		}
	}, [dispatch, history, userInfo, success, leave])

	const submitHandler = (e) => {
		e.preventDefault()

		if (fromDate === '' || toDate === '' || reason === '') {
			setMessage('All fields are mandatory')
		} else {
			dispatch(createLeave(fromDate, toDate, reason, type))
		}
	}

	return (
		<FormContainer>
			<h4 className="mb-4">Apply Leave</h4>
			{message && <Message variant="danger">{message}</Message>}
			{error && <Message variant="danger">{error}</Message>}
			{loading && <Loader />}
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

				<Button type="submit" variant="primary">
					Apply
				</Button>
			</Form>
		</FormContainer>
	)
}

export default LeaveCreateScreen
