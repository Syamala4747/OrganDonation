import React from 'react';
import './Sidebar.css';

const HospitalSidebar = ({ active }) => (
  <aside className="sidebar hospital-sidebar">
    <div className="sidebar-logo">🏥 Hospital Panel</div>
    <nav>
      <ul>
        <li className={active === 'home' ? 'active' : ''}><span>🏠</span> Home</li>
        <li className={active === 'requests' ? 'active' : ''}><span>📊</span> Requests Status</li>
        <li className={active === 'notifications' ? 'active' : ''}><span>🔔</span> Notifications</li>
        <li className={active === 'profile' ? 'active' : ''}><span>🏥</span> Hospital Profile</li>
        <li className={active === 'support' ? 'active' : ''}><span>📩</span> Contact & Support</li>
        <li><span>⏏️</span> Logout</li>
      </ul>
    </nav>
  </aside>
);

export default HospitalSidebar;
