import React, { useState } from "react";
import { FcBusinessContact, FcViewDetails } from "react-icons/fc";
import { FaBus } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";  
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router";

const Busdetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const busData=localStorage.getItem("busData")
  const storedSeats = sessionStorage.getItem("selectedSeats");
  const selectedSeats = storedSeats ? JSON.parse(storedSeats) : [];
  console.log(selectedSeats);


  
console.log("bus data",busData);
console.log("seat data",selectedSeats);
  const from = searchParams.get("from") || "";
  const to = searchParams.get("to") || "";
  const date = searchParams.get("date") || "";

  const [bus, setBus] = useState<any>(null);
  const [seat, setSeat] = useState<string>("");

  const [user, setUser] = useState({
    name: "",
    gender:"Male",
    age: "",
    email: "",
    phone: "",
    countryCode: "+91",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const userData = {
      user_name: user.name,
      gender: user.gender,
      age: user.age,
      email: user.email,
      phone: `${user.countryCode}${user.phone}`,
      bus_name: bus?.bus_name,
      seat_name: seat,
    };

    try {
      await axios.post("http://localhost:3000/users/createuser", userData);
      alert("Booking successful!");
      navigate("/userprofile");
    } catch (error) {
      console.error("Error booking ticket:", error);
      alert("Booking failed. Try again.");
    }
  };

  return (
    <div className="container mt-4">

      <nav className="container row">
        <div className="col-md-2">
          <Link to={`/busseat?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&date=${encodeURIComponent(date)}`}>
            <IoIosArrowBack size="30px" color="#DE2879" /> 
          </Link>
        </div>
        <h2 className="text-center title col-md-8">Passenger Details</h2>
      </nav>

 
      <div className="navbar border-bottom shadow-border-bottom my-3">
        <h5 className="d-flex align-items-center gap-2 info">
          <FcBusinessContact /> Passenger Information
        </h5>
      </div>

      <div className="shadow p-4 rounded-3 labeled">
        <span className="small_header">Passenger {selectedSeats?.length}</span>
        <span className="border-start px-2 mx-2">Seat {seat}</span>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className="form-label navbar small_header">
            Name
          </label>
          <input
            type="text"
            className="form-control mb-5"
            id="name"
            name="name"
            placeholder="Name"
            value={user.name}
            onChange={handleChange}
            required
          />

          <div className="row mb-3">

            <div className="col-md-6">
              <label className="form-label small_header">Gender</label>
              <div>
                <label className="form-check-label mx-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={user.gender === "Male"}
                    onChange={handleChange}
                  />{" "}
                  Male
                </label>
                <label className="form-check-label mx-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={user.gender === "Female"}
                    onChange={handleChange}
                  />{" "}
                  Female
                </label>
              </div>
            </div>


            <div className="col-md-4">
              <label className="form-label small_header" htmlFor="age">
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                className="form-control"
                placeholder="Age"
                value={user.age}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </form>
      </div>

      {/* Contact Details */}
      <main className="container">
        <div className="border-bottom mt-5">
          <h5 className="d-flex align-items-center gap-2 info">
            <FcViewDetails /> Contact Details
          </h5>
        </div>

        <div className="shadow p-4 rounded-3 mt-3 labeled">
          <div className="my-2">
            <article>
              <span className="sent_details">
                Your ticket will be sent to <FaBus /> these details
              </span>
            </article>
          </div>

          {/* Email */}
          <div className="mb-4 mt-4">
            <label className="form-label small_header" htmlFor="email">
              Email Id{" "}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone Number */}
          <div className="row">
            <div className="col-md-2 mt-3">
              <label className="form-label small_header" htmlFor="countryCode">
                Phone
              </label>
              <select
                className="form-select"
                id="countryCode"
                name="countryCode"
                value={user.countryCode}
                onChange={handleChange}
              >
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
              </select>
            </div>

            <div className="col-md-6 mb-2 mt-3">
              <label className="form-label d-none d-md-block">&nbsp;</label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="form-control"
                placeholder="Phone"
                value={user.phone}
                onChange={handleChange}
                required
              />
            </div>

            <span>
              By clicking on Proceed to Pay, you are agreeing to the Terms & Conditions
            </span>
          </div>

          {/* Submit Button */}
          <div className="mt-5 mb-5">
            <button type="submit" className="btn purple justify-content-center" onClick={handleSubmit}>
              Proceed to Book
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Busdetails;