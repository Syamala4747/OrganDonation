import React from 'react';
import './Sidebar.css';

const AdminSidebar = ({ active }) => (
  <aside className="sidebar admin-sidebar">
    <div className="sidebar-logo">🛡️ Admin Panel</div>
    <nav>
      <ul>
        <li className={active === 'home' ? 'active' : ''}><span>🏠</span> Dashboard Home</li>
        <li className={active === 'approvals' ? 'active' : ''}><span>✅</span> Approvals</li>
        <li className={active === 'analytics' ? 'active' : ''}><span>📊</span> Analytics</li>
        <li className={active === 'reports' ? 'active' : ''}><span>⚠️</span> Reports / Issues</li>
        <li className={active === 'users' ? 'active' : ''}><span>👤</span> All Users</li>
        <li><span>⏏️</span> Logout</li>
      </ul>
    </nav>
  </aside>
);

export default AdminSidebar;
