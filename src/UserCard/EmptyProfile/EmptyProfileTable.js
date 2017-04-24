import React from 'react';
import './EmptyProfileTable.css';

const EmptyProfileTable = () => (
    <div className="emptyProfileTable">
        <div className="line"><span className="text">Name: empty</span></div>
        <div className="line"><span className="text">Date of birth: empty</span></div>
        <div className="line"><span className="text">Email: empty</span></div>
        <div className="line"><span className="text">Phone: empty</span></div>
        <div className="line"><span className="text">Location: empty</span></div>
    </div>
);

export default EmptyProfileTable;
