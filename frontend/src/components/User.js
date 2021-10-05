import React from 'react'
import { useDispatch } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Button } from 'react-bootstrap'
//
import { deleteUser } from '../redux/actions/userActions'

const User = ({ user, i }) => {
	const dispatch = useDispatch()
	const deleteHandler = (id) => {
		if (window.confirm('Are you sure?')) {
			dispatch(deleteUser(id))
		}
	}
	return (
		<>
			<tr key={user._id}>
				<td>{1}</td>
				<td>{user.title + ' ' + user.name}</td>
				<td>{user.officialEmail}</td>
				<td>{user.gender}</td>
				<td>{user.designation}</td>
				<td>{user.department}</td>
				<td>{user.reportingTo}</td>
				<td>
					{user.isAdmin ? (
						<i className="fas fa-check" style={{ color: 'green' }}></i>
					) : (
						<i className="fas fa-times" style={{ color: 'red' }}></i>
					)}
				</td>
				<td>
					<LinkContainer to={`/admin/user/${user._id}/edit`}>
						<Button variant="light" className="btn-sm">
							<i className="fas fa-edit"></i>
						</Button>
					</LinkContainer>
					<Button
						variant="danger"
						className="btn-sm"
						onClick={() => deleteHandler(user._id)}
					>
						<i className="fas fa-trash"></i>
					</Button>
				</td>
			</tr>
		</>
	)
}

export default User
