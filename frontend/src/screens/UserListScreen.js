import React, { useEffect } from 'react'

import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
//
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listUsers } from '../redux/actions/userActions'
import User from '../components/User'

const UserListScreen = ({ history }) => {
	const dispatch = useDispatch()

	const userList = useSelector((state) => state.userList)
	const { loading, error, users } = userList

	const userLogin = useSelector((state) => state.userLogin)
	const { userInfo } = userLogin

	const userDelete = useSelector((state) => state.userDelete)
	const { success: successDelete } = userDelete

	useEffect(() => {
		if (userInfo && userInfo.isAdmin) {
			dispatch(listUsers())
		} else {
			history.push('/')
		}
	}, [dispatch, history, userInfo, successDelete])

	return (
		<>
			<h4>User List</h4>
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
							<th>Official Email</th>
							<th>Gender</th>
							<th>Designation</th>
							<th>Department</th>
							<th>Reporting To</th>
							<th>Admin</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{users.map((user) => (
							<User user={user} key={user._id} />
						))}
					</tbody>
				</Table>
			)}
		</>
	)
}

export default UserListScreen
