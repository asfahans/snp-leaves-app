import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
//
import Header from './components/Header'
import Footer from './components/Footer'
//
import DashboardScreen from './screens/DashboardScreen'
import LoginScreen from './screens/LoginScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={LoginScreen} exact />
          <Route path='/dashboard' component={DashboardScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
