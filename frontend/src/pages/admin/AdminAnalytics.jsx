import React from 'react';
import './AdminAnalytics.css';

const bloodGroups = [
  { group: 'A+', count: 10 },
  { group: 'B+', count: 5 },
];
const organs = [
  { organ: 'Kidney', count: 7 },
  { organ: 'Heart', count: 3 },
];

const AdminAnalytics = () => (
  <div className="analytics-container">
    <h2>Analytics</h2>
    <div className="analytics-section">
      <h3>Active Donors by Blood Group</h3>
      <ul className="analytics-list">
        {bloodGroups.map((bg, idx) => (
          <li key={idx}><strong>{bg.group}:</strong> {bg.count}</li>
        ))}
      </ul>
    </div>
    <div className="analytics-section">
      <h3>Most Requested Organ</h3>
      <ul className="analytics-list">
        {organs.map((org, idx) => (
          <li key={idx}><strong>{org.organ}:</strong> {org.count}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default AdminAnalytics;
