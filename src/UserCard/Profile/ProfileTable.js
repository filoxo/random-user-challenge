import React from 'react';
import './ProfileTable.css';

const ProfileTable = ({name, birth, email, phone, location}) => (
    <table>
        <tbody className="ProfileTable">
            <tr>
                <td className="label">Name:</td>
                <td className="text-capital">{name}</td>
            </tr>
            <tr>
                <td className="label">Date of birth:</td>
                <td>{birth}</td>
            </tr>
            <tr>
                <td className="label">Email:</td>
                <td><a href={`mailto:${email}`}>{email}</a></td>
            </tr>
            <tr>
                <td className="label">Phone:</td>
                <td><a href={`tel:${phone}`}>{phone}</a></td>
            </tr>
            <tr>
                <td className="label">Location:</td>
                <td className="text-capital">{location}</td>
            </tr>
        </tbody>
    </table>
);

export default ProfileTable;
