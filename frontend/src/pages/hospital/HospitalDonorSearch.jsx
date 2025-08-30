import React from 'react';
import './HospitalDonorSearch.css';

const donors = [
  {
    name: 'Chintapalli Naga Syamala',
    age: 20,
    bloodType: 'B+',
    location: 'India',
    organsPledged: ['Kidney'],
    photo: '',
  },
];

const HospitalDonorSearch = () => (
  <div className="donor-search-container">
    <h2>Find Donors</h2>
    <div className="donor-search-bar">
      <input type="text" placeholder="Search by name, blood group, organ, location..." />
      <button className="search-btn">Search</button>
    </div>
    <div className="donor-list">
      {donors.map((donor, idx) => (
        <div key={idx} className="donor-card">
          <div className="donor-photo">{donor.photo ? <img src={donor.photo} alt="Donor" /> : <span>👤</span>}</div>
          <div className="donor-details">
            <div><strong>{donor.name}</strong> ({donor.age} years old)</div>
            <div><strong>Blood Type:</strong> <span className="blood-type">{donor.bloodType}</span></div>
            <div><strong>Location:</strong> {donor.location}</div>
            <div><strong>Organs Pledged:</strong> {donor.organsPledged.map(org => <span key={org} className="organ-tag">{org}</span>)}</div>
            <button className="request-btn">+ Request Donation</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default HospitalDonorSearch;
