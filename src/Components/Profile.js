// src/Components/Profile.js
import React from 'react';
import './Profile.css';
import profilePhoto from '../Resources/1718257713337.jpg'; // Ajusta la ruta según la carpeta

const Profile = () => {
  return (
    <div className="profile">
      <img
        src={profilePhoto}
        alt="Desarrollador"
        className="profile-photo"
      />
      <h2 className="profile-name">JUAN LEON</h2>
    </div>
  );
};

export default Profile;