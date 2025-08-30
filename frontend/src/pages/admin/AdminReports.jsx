import React from 'react';
import './AdminReports.css';

const reports = [
  { issue: 'Spam hospital', user: 'hospital1', action: 'Suspend' },
  { issue: 'Fake donor', user: 'donor1', action: 'Suspend' },
];

const AdminReports = () => (
  <div className="reports-container">
    <h2>Reports / Issues</h2>
    <table className="reports-table">
      <thead>
        <tr>
          <th>Issue</th>
          <th>User</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {reports.map((report, idx) => (
          <tr key={idx}>
            <td>{report.issue}</td>
            <td>{report.user}</td>
            <td><button className="suspend-btn">Suspend</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default AdminReports;
