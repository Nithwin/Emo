import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Landingpage';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Otp from './pages/OTP';
import Meeting from './pages/Meeting';
import Dashboard from './pages/Dashboard';
import MeetingWaiting from './pages/Meeting/MeetingWaiting';
import Profile from './pages/Dashboard/Profile';
import DashboardContent from './pages/Dashboard/DashboardContent';
import History from './pages/Dashboard/History';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/meeting-waiting" element={<MeetingWaiting />} />
        <Route path="/meeting" element={<Meeting />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DashboardContent />} /> {/* Default content for /dashboard */}
          <Route path="profile" element={<Profile />} /> {/* Profile content for /dashboard/profile */}
          <Route path="history" element={<History />} /> {/* Profile content for /dashboard/profile */}
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;