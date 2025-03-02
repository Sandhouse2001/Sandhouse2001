// import React from 'react';
// import carousel1 from '../Photos/carousel1.png';
// import carousel2 from '../Photos/carousel2.png';
// import carousel3 from '../Photos/carousel3.png';
// import carousel4 from '../Photos/carousel4.png';
// import carousel5 from '../Photos/carousel5.png';
// import carousel6 from '../Photos/carousel6.png';

// const Carousel = () => {
//   return (
//     <div className="container-fluid carouselColor py-3">
//       <div id="busCarousel" className="carousel slide" data-bs-ride="carousel">
//         <div className="carousel-inner">
          
//           {/* First Carousel Slide */}
//           <div className="carousel-item active">
//             <div className="row justify-content-center">
//               {[carousel1, carousel2, carousel3].map((image, index) => (
//                 <div key={index} className="col-md-4">
//                   <div className="card carousel-card border">
//                     <img 
//                       src={image} 
//                       alt={`carousel-${index}`} 
//                       className="card-img-top img-fluid"
//                       style={{ maxWidth: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px' }} 
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Second Carousel Slide */}
//           <div className="carousel-item">
//             <div className="row justify-content-center">
//               {[carousel5, carousel4, carousel6].map((image, index) => (
//                 <div key={index} className="col-md-4">
//                   <div className="card carousel-card border">
//                     <img 
//                       src={image} 
//                       alt={`carousel-${index + 3}`} 
//                       className="card-img-top img-fluid"
//                       style={{ maxWidth: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px' }} 
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carousel;


import React from 'react'
import Card from './shared/Card'

const Carousel = () => {
  return (
    <Card>
      <h1 className='mb-4'>TREANDING OFFERS</h1>
     <div className='row'>
      <div className='col-lg-4 col-md-6 col-sm-12'>
      <div className='offercard'>
    
       <div className='d-flex justify-content-between'>
         <div >
          <img src="https://st.redbus.in/Images/INDOFFER/80X80/BUS300.png" alt="" />
         </div>
         <div>
          <span className='mb-3'>Bus</span>
          <h2 className='offername'>Save up to Rs 250 on bus tickets</h2>
          <p>valid till 31 Mar</p>
          <span>CashBack 500</span>
         </div>

       </div>
     
        </div>
      </div>
      <div className='col-lg-4 col-md-6 col-sm-12'>
      <div className='offercard '>
        
       <div className='d-flex justify-content-between'>
         <div >
          <img src="https://st.redbus.in/Images/INDOFFER/80X80/BUS300.png" alt="" />
         </div>
         <div >
          <span className='mb-3'>Bus</span>
          <h2 className='offername'>Save up to Rs 250 on bus tickets</h2>
          <p>valid till 31 Mar</p>
          <span>First</span>
         </div>

       </div>
     
        </div>
      </div>
      <div className='col-lg-4 col-md-12 col-sm-12'>
      <div className='offercard'>
        
       <div className='d-flex justify-content-between'>
         <div >
          <img src="https://st.redbus.in/Images/INDOFFER/80X80/BUS300.png" alt="" />
         </div>
         <div >
          <span className='mb-3'>Bus</span>
          <h2 className='offername'>Save up to Rs 250 on bus tickets</h2>
          <p>valid till 31 Mar</p>
          <span>Coupen Code</span>
         </div>

       </div>
     
        </div>
      </div>
        
     </div>
    </Card>
  )
}

export default Carousel
