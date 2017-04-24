import React, { Component } from 'react';
import EmptyProfileImage from './EmptyProfile/EmptyProfileImage';
import EmptyProfileTable from './EmptyProfile/EmptyProfileTable';
import './UserCard.css';

class UserCard extends Component {
    constructor(props) {
        super();
    }
    render() {
        if(this.props.userData === null) {
            return (<div className="profileCard">
                <EmptyProfileImage />
                <EmptyProfileTable />
            </div>);
        } else {
            return (<div className="profileCard">Userdata is { this.props.userData }</div>);
        }
    }
}

export default UserCard;
