import offer1 from'../Photos/offer1 .png'
import offer2 from '../Photos/offer2.png'
import offer3 from '../Photos/offer3.png'
import { BiSolidOffer} from "react-icons/bi";
import '../components/Section.css'


const BookingOffers = () => {

  
    return (
      <div className="container py-3">
        {/* Title Section */}
        <div className="d-flex align-items-center mb-4">
          <BiSolidOffer size={36} className="me-2" color='rgb(59, 239, 59)' />
          <h2 className="mb-0">Bus<span className='booking'>Booking Offers</span> & Discounts</h2>
        </div>
  
        {/* Offers Section */}
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="card shadow-sm border-0">
              <img
                src={offer1}
                alt="Return Journey Discount"
                className="card-img-top"
                style={{ height: "250px", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card shadow-sm border-0">
              <img
                src={offer2}
                alt="Cashback Offer"
                className="card-img-top"
                style={{ height: "250px", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card shadow-sm border-0">
              <img
                src={offer3}
                alt="10% Discount"
                className="card-img-top"
                style={{ height: "250px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

export default BookingOffers
