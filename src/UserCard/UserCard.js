import React, { Component } from 'react';
import EmptyProfileImage from './EmptyProfile/EmptyProfileImage';
import EmptyProfileTable from './EmptyProfile/EmptyProfileTable';
import ProfileImage from './Profile/ProfileImage';
import ProfileTable from './Profile/ProfileTable';
import './UserCard.css';

class UserCard extends Component {
    constructor(props) {
        super();
    }
    render() {
        const { userData } = this.props;
        if(userData === null) {
            return (<div className="userCard">
                <EmptyProfileImage />
                <EmptyProfileTable />
            </div>);
        } else {
            const img = userData.picture.large;
            const name = `${userData.name.first} ${userData.name.last}`;
            const { dob, email, phone } = userData;
            const birth = new Date(Date.parse(dob)).toLocaleDateString();
            console.log(birth)
            const loc = `${userData.location.city}, ${userData.location.state}`;
         
            return (<div className="userCard">
                <ProfileImage src={img} alt={name}></ProfileImage>
                <ProfileTable name={name} birth={birth} email={email} phone={phone} location={loc}></ProfileTable>
            </div>);
        }
    }
}

export default UserCard;
