import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
//
import { logout } from '../redux/actions/userActions'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = (e) => {
    dispatch(logout())
  }

  return (
    <header>
      <Navbar bg='light' expand='lg' collapseOnSelect>
        <Container fluid>
          <LinkContainer to='/' className='mr-4'>
            <Navbar.Brand>SNP Leaves Management System</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            {userInfo && (
              <Nav className='mr-auto'>
                <LinkContainer to='/dashboard'>
                  <Nav.Link>Dashboard</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/applyleave'>
                  <Nav.Link>Apply</Nav.Link>
                </LinkContainer>
              </Nav>
            )}

            <Nav className='ms-auto'>
              {userInfo && (
                <NavDropdown
                  title={userInfo.title + ' ' + userInfo.name + ' '}
                  id='username'
                >
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminMenu'>
                  <LinkContainer to='/admin/userList'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/leaveList'>
                    <NavDropdown.Item>Leaves</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
