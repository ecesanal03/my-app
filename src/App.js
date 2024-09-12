import React from 'react';
import './App.css';  // Optional, if you have global styles for your app
import UserProfileForm from './components/ProfileForm';  // Import your component

function App() {
  return (
    <div className="App">
      <h1>Volunteer Management</h1>
      <UserProfileForm /> {/* Render the UserProfileForm component */}
    </div>
  );
}

export default App;

