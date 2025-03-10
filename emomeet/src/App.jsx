import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Home from './pages/Landingpage'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Otp from './pages/OTP'
import Meeting from './pages/Meeting'
import Dashboard from './pages/Dashboard'
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/meeting" element={<Meeting />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App