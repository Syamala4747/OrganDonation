import React from 'react';
import './AdminUsers.css';

const users = [
  { username: 'donor1', role: 'donor', email: 'donor1@example.com' },
  { username: 'hospital1', role: 'hospital', email: 'hospital1@example.com' },
  { username: 'org1', role: 'organization', email: 'org1@example.com' },
];

const AdminUsers = () => (
  <div className="users-container">
    <h2>All Users</h2>
    <table className="users-table">
      <thead>
        <tr>
          <th>Username</th>
          <th>Role</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, idx) => (
          <tr key={idx}>
            <td>{user.username}</td>
            <td>{user.role}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default AdminUsers;
