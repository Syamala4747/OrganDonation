import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './auth/Login';
import DonorHome from './pages/donor/DonorHome';
import DonorStatus from './pages/donor/DonorStatus';
import DonorProfile from './pages/donor/DonorProfile';
import DonorNotifications from './pages/donor/DonorNotifications';
import DonorSupport from './pages/donor/DonorSupport';
import HospitalHome from './pages/hospital/HospitalHome';
import AdminHome from './pages/admin/AdminHome';
import OrgHome from './pages/organization/OrgHome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Login />} />
        <Route path="/donor" element={<DonorHome />} />
        <Route path="/donor/status" element={<DonorStatus />} />
        <Route path="/donor/profile" element={<DonorProfile />} />
        <Route path="/donor/notifications" element={<DonorNotifications />} />
        <Route path="/donor/support" element={<DonorSupport />} />
        <Route path="/hospital/*" element={<HospitalHome />} />
        <Route path="/admin/*" element={<AdminHome />} />
        <Route path="/organization/*" element={<OrgHome />} />
      </Routes>
    </Router>
  );
}

export default App;
