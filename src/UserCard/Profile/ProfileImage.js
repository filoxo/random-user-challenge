import React from 'react';
import './ProfileImage.css';

const ProfileImage = ({src, alt}) => (
    <img className="profileImage" src={src} alt={`Profile image for ${alt}`}/>
);

export default ProfileImage;
