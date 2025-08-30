import React from 'react';
import './AdminApprovals.css';

const pending = [
  { username: 'hospital1', role: 'hospital', email: 'hospital1@example.com' },
  { username: 'org1', role: 'organization', email: 'org1@example.com' },
];

const AdminApprovals = () => (
  <div className="approvals-container">
    <h2>Pending Approvals</h2>
    <table className="approvals-table">
      <thead>
        <tr>
          <th>Username</th>
          <th>Role</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {pending.map((user, idx) => (
          <tr key={idx}>
            <td>{user.username}</td>
            <td>{user.role}</td>
            <td>{user.email}</td>
            <td>
              <button className="approve-btn">✅ Approve</button>
              <button className="reject-btn">❌ Reject</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default AdminApprovals;
