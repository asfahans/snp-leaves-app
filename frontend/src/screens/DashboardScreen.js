import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
//
import Message from '../components/Message'
import Loader from '../components/Loader'

const DashboardScreen = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  useEffect(() => {
    if (!userInfo) {
      history.push('/')
    }
  }, [history, userInfo])

  return (
    <div>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <h4>Dashboard</h4>
    </div>
  )
}

export default DashboardScreen
