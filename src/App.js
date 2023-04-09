import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/Signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/Login';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Dashboard from './Pages/Dashboard';
import StartClass from './Pages/StartClass';
import Room from './Pages/Room'

function App() {



  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/' element={<Home />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route exact path='/startclass' element={<StartClass />} />
          <Route path="/room/:roomId" element={<Room />} />

        </Routes>
      </Router>
    </div>
  )
}

export default App
