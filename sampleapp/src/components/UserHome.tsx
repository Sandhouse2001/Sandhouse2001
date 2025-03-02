import React from 'react';
import man from '../Photos/man.png';
import { CiMobile1 } from "react-icons/ci";

const UserHome = () => {
  return (
    <div className="container p-5">

      <div className="mb-3">
        <span className="select">Home/</span>
        <span className="text-dark"> Profile</span>
      </div>

      <h2 className="pt-3 fw-bold">Profile</h2>

  
      <div className="d-flex align-items-center gap-3 pt-3">
    
        <img src={man} alt="User" width="80px"  />

       {/* User */}
        <div className=''>
          <h4 className="fw-semibold">User</h4>
          <div className="d-flex align-items-center gap-2">
            <CiMobile1 size="24px" />
            <h5 className="m-0">9159723200</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;