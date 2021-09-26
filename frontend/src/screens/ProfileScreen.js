import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
//
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetails, updateUserProfile } from '../redux/actions/userActions'

const ProfileScreen = ({ location, history }) => {
  const [title, setTitle] = useState('')
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [address, setAddress] = useState('')
  const [personalEmail, setPersonalEmail] = useState('')
  const [gender, setGender] = useState('')
  const [maritalStatus, setMaritalStatus] = useState('')

  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success } = userUpdateProfile

  useEffect(() => {
    if (!userInfo) {
      history.push('/')
    } else {
      if (!user.name) {
        dispatch(getUserDetails('profile'))
      } else {
        setTitle(user.title)
        setName(user.name)
        setMobile(user.mobile)
        setPersonalEmail(user.personalEmail)
        setAddress(user.address)
        setGender(user.gender)
        setMaritalStatus(user.maritalStatus)
      }
    }
  }, [dispatch, history, userInfo, user])

  const submitHandler = (e) => {
    e.preventDefault()
    if (
      title === '' ||
      name === '' ||
      mobile === '' ||
      address === '' ||
      gender === '' ||
      maritalStatus === ''
    ) {
      setMessage('All fields are mandatory')
      setTimeout(function () {
        setMessage('')
      }, 2000)
    } else if (password !== confirmPassword) {
      setMessage('Passwords do not match')
      setTimeout(function () {
        setMessage('')
      }, 2000)
    } else {
      dispatch(
        updateUserProfile({
          id: user._id,
          title,
          name,
          mobile,
          password,
          address,
          personalEmail,
          gender,
          maritalStatus,
        })
      )
    }
  }

  return (
    <Row>
      <Col md={2}>
        <h4>My Profile</h4>
        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {success && <Message variant='success'>Profile Update</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='title'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              as='select'
              custom
              value={title}
              className='form-select'
              onChange={(e) => setTitle(e.target.value)}
            >
              <option value='Capt.'>Capt.</option>
              <option value='Mr.'>Mr.</option>
              <option value='Ms.'>Ms.</option>
              <option value='Mrs.'>Mrs.</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='mobile'>
            <Form.Label>Mobile</Form.Label>
            <Form.Control
              type='number'
              placeholder='Enter Mobile'
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='confirmPassword'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter Confirm Password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='address'>
            <Form.Label>Address</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Address'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='personalEmail'>
            <Form.Label>Personal Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter Personal Email'
              value={personalEmail}
              onChange={(e) => setPersonalEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='gender' className='pb-2'>
            <Form.Label>Gender</Form.Label>
            <br />
            <Form.Check
              inline
              label='Male'
              name='gender'
              id='male'
              type='radio'
              value='Male'
              onChange={(e) => setGender(e.target.value)}
              checked={gender === 'Male'}
            />
            <Form.Check
              inline
              label='Female'
              name='gender'
              id='female'
              type='radio'
              value='Female'
              checked={gender === 'Female'}
              onChange={(e) => setGender(e.target.value)}
            />
            <Form.Check
              inline
              label='others'
              name='gender'
              id='others'
              type='radio'
              value='Others'
              checked={gender === 'Others'}
              onChange={(e) => setGender(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId='maritalStatus' className='pb-3'>
            <Form.Label>Marital Status</Form.Label>

            <Row>
              <Col>
                <Form.Check
                  inline
                  label='Single'
                  name='maritalStatus'
                  id='single'
                  type='radio'
                  value='Single'
                  onChange={(e) => setMaritalStatus(e.target.value)}
                  checked={maritalStatus === 'Single'}
                />

                <Form.Check
                  inline
                  label='Married'
                  name='maritalStatus'
                  id='married'
                  type='radio'
                  value='Married'
                  onChange={(e) => setMaritalStatus(e.target.value)}
                  checked={maritalStatus === 'Married'}
                />
              </Col>
              <Col>
                <Form.Check
                  inline
                  label='Divorced'
                  name='maritalStatus'
                  id='divorced'
                  type='radio'
                  value='Divorced'
                  onChange={(e) => setMaritalStatus(e.target.value)}
                  checked={maritalStatus === 'Divorced'}
                />
                <Form.Check
                  inline
                  label='Widowed'
                  name='maritalStatus'
                  id='widowed'
                  type='radio'
                  value='Widowed'
                  onChange={(e) => setMaritalStatus(e.target.value)}
                  checked={maritalStatus === 'Widowed'}
                />
              </Col>
            </Row>
          </Form.Group>

          <Button type='submit' variant='primary'>
            Update
          </Button>
        </Form>
      </Col>
      <Col md={10}>
        <h4>My Leaves</h4>
      </Col>
    </Row>
  )
}

export default ProfileScreen
