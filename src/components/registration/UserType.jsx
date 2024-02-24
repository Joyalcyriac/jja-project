// UserTypeSelection.js
import React from 'react';
import { Link } from 'react-router-dom';
// import './User.css'

const UserType = () => {
    return (
      
    <div className="user-type-selection">
          <h2>Are you a client or a worker?</h2>
          <div className='blurbox'>
      <div>
        <Link to="/clientlog">Client</Link>
        {/* This link will navigate to ClientRegistration component */}
      </div>
      <div>
        <Link to="/workerlog">Worker</Link>
        {/* This link will navigate to WorkerRegistration component */}
             
                </div>
              </div>
            </div>
      
  );
};

export default UserType;