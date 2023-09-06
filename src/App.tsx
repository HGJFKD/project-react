
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import Home from './components/Home'
import Trips from './components/Trips'
import UserLogin from './components/UserLogin'
import UserRegistration from './components/UserRegistration'
import TripDetail from './components/TripDetail'
import UpddateTripFrom from './components/UpddateTripFrom'



function App() {

  return (
    <Router>
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/Trips' element={<Trips />} />
        <Route path='/UserLogin' element={<UserLogin />} />
        <Route path='/UserRegistration' element={<UserRegistration />} />
        <Route path='/More/:tripID' element={<TripDetail />} />
        <Route path='/UpddateTrip/:tripID' element={<UpddateTripFrom />} />
        <Route path='/NewTrip' element={<TripDetail />} />
      </Routes>
    </Router>
  )
}

export default App
