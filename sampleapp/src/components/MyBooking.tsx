import React from 'react'
import { FaTicketSimple } from "react-icons/fa6";
import { MdCancelPresentation } from "react-icons/md";


const MyBooking = () => {


  return (
  <div>
      <div className='visulation'>
        <div className='sidebar'>
            <h2 className='mt-5'>My Booking</h2>

           <div className='new-chat'>
           My Booking
             <FaTicketSimple size={'20px'} className='menu'/>
           
           </div>

           <div className='new-chat'>
           Cancelled Trip
             <MdCancelPresentation size={'20px'} className='menu'/>
           </div>
        </div>
    </div>
  </div>

  )
}

export default MyBooking
