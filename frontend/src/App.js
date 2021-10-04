import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
//
import Header from './components/Header'
import Footer from './components/Footer'
//
import DashboardScreen from './screens/DashboardScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import LeaveListScreen from './screens/LeaveListScreen'
import LeaveCreateScreen from './screens/LeaveCreateScreen'

const App = () => {
	return (
		<Router>
			<Header />
			<main className="py-3">
				<Container fluid>
					<Route path="/profile" component={ProfileScreen} />
					<Route path="/dashboard" component={DashboardScreen} />
					<Route path="/applyleave" component={LeaveCreateScreen} />
					<Route path="/admin/register" component={RegisterScreen} />
					<Route path="/admin/userlist" component={UserListScreen} />
					<Route path="/admin/user/:id/edit" component={UserEditScreen} />
					<Route path="/admin/leavelist" component={LeaveListScreen} />
					<Route path="/" component={LoginScreen} exact />
				</Container>
			</main>
			<Footer />
		</Router>
	)
}

export default App
