import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
//
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listLeaves } from '../redux/actions/leaveActions'
import Leave from '../components/Leave'

const LeaveListScreen = ({ history, match }) => {
  const dispatch = useDispatch()

  const leaveList = useSelector((state) => state.leaveList)
  const { loading, error, leaves } = leaveList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listLeaves())
    } else {
      history.push('/')
    }
  }, [dispatch, history, userInfo])

  return (
    <>
      <h4>Leave List</h4>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
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
            </tr>
          </thead>
          <tbody>
            {leaves.map((leave) => (
              <Leave leave={leave} key={leave._id} />
            ))}
          </tbody>
        </Table>
      )}
    </>
  )
}

export default LeaveListScreen
