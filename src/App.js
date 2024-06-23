import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

import ROUTES from './constants/routes'
import Login from './pages/Login'
import PatientsPayments from './pages/PatientsPayments'
import Payment from './pages/Payment'
import { AuthContext } from './context/AuthContextWrapper'
import GlobalStyles from './GlobalStyles.style'

const App = () => {
  console.log('useContext(AuthContext)', useContext(AuthContext))
  const { auth } = useContext(AuthContext)

  return (
    <Router>
      <GlobalStyles />
      {auth ? (
        <div className="">
          <div className="">
            <div className="">
                  <Routes>
                    <Route path={'/'} element={<PatientsPayments />} />
                  </Routes>
            </div>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="*" element={<Login />} />
          <Route path={ROUTES.PAYMENT} element={<Payment />} />
        </Routes>
      )}
    </Router>
  )
}

export default App
