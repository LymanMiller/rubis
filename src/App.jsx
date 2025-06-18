import React from 'react'
import { Route, Routes } from 'react-router'
import "./index.css"
import Welcome from './pages/welcome.jsx'
import Home from './pages/home.jsx'
import TelSignin from './pages/telSignin.jsx'
import AuthenticateCode from './pages/authenticateCode.jsx'
import StartProfile from './pages/startProfle.jsx'
import CompleteProfile from './pages/completeProfile.jsx'
import PropertyDetail from './pages/PropertyDetail.jsx'
import Property from './pages/Property.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/about.jsx'
import EditProfilePage from './pages/EditProfilePage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'

const App = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='EditProfilePage' element={<EditProfilePage />} />
    <Route path='ProfilePage' element={<ProfilePage />} />
    <Route path='about' element={<About />} />
    <Route path='Property' element={<Property />} />
    <Route path='Contact' element={<Contact />} />
    <Route path='/welcome' element={<Welcome />} />
    <Route path='/telSignin' element={<TelSignin />} />
    <Route path='/authenticateCode' element={<AuthenticateCode />} />
    <Route path='/startProfile' element={<StartProfile />} />
    <Route path='/completeProfile' element={<CompleteProfile />} />
    <Route path="/property/:id" element={<PropertyDetail />} />
  </Routes>
)

export default App