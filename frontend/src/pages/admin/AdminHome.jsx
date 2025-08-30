import React from 'react';
import AdminSidebar from '../../components/Sidebar/AdminSidebar';
import './AdminHome.css';

const AdminHome = () => {
  return (
    <div className="dashboard-container">
      <AdminSidebar active="home" />
      <div className="dashboard-main">
        <nav className="dashboard-navbar">
          <input className="dashboard-search" placeholder="Search..." />
          <div className="dashboard-actions">
            <span className="dashboard-bell">🔔</span>
            <div className="dashboard-profile admin">🛡️</div>
          </div>
        </nav>
        <div className="dashboard-content">
          <h1>System Overview</h1>
          <p>Monitor platform performance and key metrics.</p>
          {/* Add summary cards, analytics, approvals, etc. here */}
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
