import React, { useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './ProfileForm.css';  // Link to your CSS file

const states = [
  { value: 'AL', label: 'Alabama' },
  { value: 'AK', label: 'Alaska' },
  // Add other states...
];

const skillsOptions = [
  { value: 'IT', label: 'IT' },
  { value: 'Marketing', label: 'Marketing' },
  { value: 'Teaching', label: 'Teaching' },
  // Add more skills...
];

export default function UserProfileForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipCode: '',
    skills: [],
    preferences: '',
    availability: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleStateChange = (selectedOption) => {
    setFormData({ ...formData, state: selectedOption.value });
  };

  const handleSkillsChange = (selectedSkills) => {
    setFormData({ ...formData, skills: selectedSkills });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, availability: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="main-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Navigation</h2>
        <ul className="sidebar-nav">
          <li><a href="#profile">Profile</a></li>
          <li><a href="#settings">Settings</a></li>
          <li><a href="#dashboard">Dashboard</a></li>
          <li><a href="#logout">Logout</a></li>
        </ul>
      </div>

      {/* Main Content (Profile Form) */}
      <div className="content">
        <form onSubmit={handleSubmit} className="profile-form">
          <h2 className="form-title">Complete Your Profile</h2>

          <div className="form-row">
            <div className="form-group">
              <label>Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                maxLength="50"
                required
              />
            </div>
            <div className="form-group">
              <label>Address 1 *</label>
              <input
                type="text"
                name="address1"
                value={formData.address1}
                onChange={handleInputChange}
                maxLength="100"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Address 2</label>
              <input
                type="text"
                name="address2"
                value={formData.address2}
                onChange={handleInputChange}
                maxLength="100"
              />
            </div>
            <div className="form-group">
              <label>City *</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                maxLength="100"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>State *</label>
              <Select
                name="state"
                options={states}
                onChange={handleStateChange}
                placeholder="Select State"
                required
              />
            </div>
            <div className="form-group">
              <label>Zip Code *</label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                maxLength="9"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Skills *</label>
              <Select
                isMulti
                name="skills"
                options={skillsOptions}
                value={formData.skills}
                onChange={handleSkillsChange}
                placeholder="Select Skills"
                required
              />
            </div>
            <div className="form-group">
              <label>Preferences</label>
              <textarea
                name="preferences"
                value={formData.preferences}
                onChange={handleInputChange}
                rows="4"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group full-width">
              <label>Availability *</label>
              <DatePicker
                selected={formData.availability}
                onChange={handleDateChange}
                placeholderText="Select Availability"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <button type="submit" className="submit-button">Save Profile</button>
          </div>
        </form>
      </div>
    </div>
  );
}
