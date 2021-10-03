import React from 'react'
import Moment from 'react-moment'

const Leave = ({ leave, i, pageName }) => {
  return (
    <>
      <tr key={i}>
        <td>{1}</td>
        <td>{leave.user.name}</td>
        <td>{leave.user.designation}</td>
        <td>{leave.user.department}</td>
        <td className='text-center'>
          <Moment format='DD/MM/YYYY'>{leave.fromDate}</Moment>
        </td>
        <td className='text-center'>
          <Moment format='DD/MM/YYYY'>{leave.toDate}</Moment>
        </td>
        <td className='text-center'>
          <Moment
            duration={leave.fromDate}
            date={leave.toDate}
            add={{ days: 1 }}
          />
        </td>
        <td className='text-center'>
          {leave.hodApproval === 'Approved' ? leave.hodApproval : '-'}
        </td>
        <td className='text-center'>
          {leave.finalApproval === 'Approved' ? leave.finalApproval : '-'}
        </td>
        <td>{leave.finalApproval}</td>
      </tr>
    </>
  )
}

export default Leave
