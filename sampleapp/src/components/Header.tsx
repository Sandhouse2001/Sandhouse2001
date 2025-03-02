import React from 'react'
import { IoWalletSharp } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import logo from '../Photos/star.png'
import bus from '../Photos/Loginbus.jpg'
import { Link } from 'react-router';



const Header = () => {

  // const pic = 'https://www.nuego.in/static/media/Top%20Bar%20EV%20Show_Dekstop.58ef0d4747031040c1b8.png'
 
  
  return (
    <div>
      
        <header className='p-1 fixed-top  ' style={{ paddingTop: '80px' }}>

          <div className='container'>
             <div className='d-flex align-items-center justify-content-between'>
                <div>
              <Link to={"/homepage"}><img src={logo} alt="StarLine Logo" className="logo"/></Link>
                    {/* <img src={pic} alt="" width={180} className='' /> */}
                </div>
                 <nav>
                  <ul className="nav">
                    <li className="nav-item">
                      <Link className="nav-link text-white" to={'/wallet'}>
                        <IoWalletSharp/>
                      </Link>
                     </li>
                    <li className="nav-item">
                      <Link to="" className="nav-link text-white">
                        <BiSolidOffer />
                      </Link>
                    </li>
                    <li className="nav-item d-none d-md-block">
                      <Link to="/mybooking" className="nav-link text-white">
                      My Trips<IoIosArrowDown />
                      </Link>
                    </li> 
                    <li className="nav-item d-none d-md-block">
                      <Link to="" className="nav-link text-white">
                      Booking Hub
                      </Link>
                    </li>
                    <li className="nav-item">
                    <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className='nav-link text-white'>
                        <CgProfile />
                        </button>
                    </li>
                 </ul>
              </nav>
             </div>
          </div>
       </header>

       
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" >
           <div className="modal-dialog modal-xl">
             <div className="modal-content">
              <div className='row'>
                <div className='col'>
                  <img src={bus} alt="" className='curve' />
                  </div >

                   <div className='col '>
                     <div className="modal-header">
                       <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                        <button 
                          type="button" 
                          className="btn-close" 
                          data-bs-dismiss="modal" 
                          aria-label="Close">
                         </button>
                         </div>

                          <div className="">
                              <h1 className="mt-4">Your Starline Adventure starts here</h1>
                                  <h4 className="mt-4">Sign Up</h4>
                           </div>
                <form >
                   <div className="mt-4">
                    <label
                      htmlFor="name"
                      className="form-label small_header">
                      Enter Name
                    </label>
                     <input
                     type="text"
                     className="form-control mb-3 p-3"
                     id="name"
                     placeholder="Enter your Name" />
                    </div>
                    
                      <div>
                       <label
                        htmlFor="mobile"
                       className="form-label small_header">
                        Mobile Number
                        </label>
                     <input
                       type="text"
                       className="form-control mb-5 p-3 "
                       id="mobile"
                       placeholder="Enter your number"/>
                      </div>

                    <div className="d-flex justify-content-center">
                      <Link to={"login/userProfile"} className="btn" id="vist">
                          Visit the site
                        </Link>
                      </div>
                   </form>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
   }

export default Header
