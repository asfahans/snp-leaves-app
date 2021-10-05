import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
//
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listMyLeaves } from '../redux/actions/leaveActions'
import Leave from '../components/Leave'

const DashboardScreen = ({ history, match }) => {
	const dispatch = useDispatch()

	const leaveListMy = useSelector((state) => state.leaveListMy)
	const { loading, error, leaves } = leaveListMy

	const userLogin = useSelector((state) => state.userLogin)
	const { userInfo } = userLogin

	useEffect(() => {
		if (userInfo) {
			dispatch(listMyLeaves())
		} else {
			history.push('/')
		}
	}, [dispatch, history, userInfo])

	return (
		<>
			<h4>Dashboard</h4>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<Table striped bordered hover responsive className="table-sm">
					<thead>
						<tr>
							<th>Sr.No.</th>
							<th>Name</th>
							<th>Designation</th>
							<th>Department</th>
							<th>From</th>
							<th>To</th>
							<th>No. of days</th>
							<th>Approved by</th>
							<th>Final approval by</th>
							<th>Status</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{leaves.map((leave) => (
							<Leave leave={leave} key={leave._id} isAdminScreen="false" />
						))}
					</tbody>
				</Table>
			)}
		</>
	)
}

export default DashboardScreen
