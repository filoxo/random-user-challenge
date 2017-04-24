import React from 'react';
import './ProfileImage.css';

const ProfileImage = ({src, alt}) => (
    <img className="profileImage" src={src} alt={alt}/>
);

export default ProfileImage;
