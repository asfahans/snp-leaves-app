import React from 'react'
import Moment from 'react-moment'
import { LinkContainer } from 'react-router-bootstrap'
import { Button } from 'react-bootstrap'

const Leave = ({ leave, i, isAdminScreen }) => {
	return (
		<>
			<tr key={i}>
				<td width="50px">{1}</td>
				<td>{leave.user.name}</td>
				<td>{leave.user.designation}</td>
				<td>{leave.user.department}</td>
				<td className="text-center">
					<Moment format="DD/MM/YYYY">{leave.fromDate}</Moment>
				</td>
				<td className="text-center">
					<Moment format="DD/MM/YYYY">{leave.toDate}</Moment>
				</td>
				<td className="text-center">
					<Moment
						duration={leave.fromDate}
						date={leave.toDate}
						add={{ days: 1 }}
					/>
				</td>
				<td className="text-center">
					{leave.hodApproval === 'Approved' ? leave.hodApproval : '-'}
				</td>
				<td className="text-center">
					{leave.finalApproval === 'Approved' ? leave.finalApproval : '-'}
				</td>
				<td>{leave.finalApproval}</td>
				<td className="text-center">
					{leave.hodApproval === 'Pending' && isAdminScreen === 'false' ? (
						<LinkContainer to={`/leave/${leave._id}/edit`}>
							<Button variant="light" className="btn-sm">
								<i className="fas fa-edit"></i>
							</Button>
						</LinkContainer>
					) : (
						<Button variant="light" className="btn-sm">
							<i className="fas fa-edit" disabled></i>
						</Button>
					)}
				</td>
			</tr>
		</>
	)
}

export default Leave
