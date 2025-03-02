  import React, { useState, useEffect, useRef } from "react";
  import axios from "axios";
  import { IoSearch } from "react-icons/io5";
  import BookingOffers from "./BookingOffers";
  import UserHome from "./UserHome";
  import { useNavigate } from "react-router";
  import Carousel from "./Carousel";

  const InputDropdown: React.FC<{ 
    value: string; 
    onChange: (value: string) => void; 
    options: string[]; 
    placeholder: string; 
    disabled?: boolean 
  }> = ({ value, onChange, options, placeholder, disabled }) => {
    const [showList, setShowList] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setShowList(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
      <div className="position-relative" ref={dropdownRef} style={{width: "230px"}}>
        <input
          type="text"
          className="form-control"
          value={value}
          placeholder={placeholder} 
          readOnly
          onClick={() => {
            if (disabled) {
              alert("Please select Departure first!");
              return;
            }
            setShowList(!showList);
          }} />

        {showList && (  
          <ul className="dropdown-menu show" style={{ position: "absolute", top: "100%", left: "15%", width: "100%", zIndex: 1000 }}>
            {options.length > 0 ? (
              options.map((option, index) => (
                <li key={index} className="dropdown-item" onClick={() => { onChange(option); setShowList(false); }}>
                  {option}
                </li>
              ))
            ) : (
              <li className="dropdown-item text-muted">No options available</li>
            )}
          </ul>
        )}
      </div>
    );
  };

  const Searchlist: React.FC = () => {
    const [from, setFrom] = useState<string>("");
    const [to, setTo] = useState<string>("");
    const [date, setDate] = useState<string>("");
    const [buses, setBuses] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [districts, setDistricts] = useState<string[]>([]);
    const [showBusList, setShowBusList] = useState<boolean>(false);
    
    const navigate = useNavigate();

    useEffect(() => {
      axios.get("http://localhost:3000/districts")
        .then((response) => {
          console.log("Fetched Data:", response.data);
          const districtNames = response.data.map((district: { district_name: string }) => district.district_name);
          setDistricts(districtNames);
        })
        .catch((error) => console.error("API Error:", error));
    }, []);

    const validateForm = (event: React.MouseEvent): void => {
      event.preventDefault();
      if (!from.trim() || !to.trim() || !date.trim()) {
        alert("Please fill all fields!");
        return;
      }
      if (from === to) {
        alert("Departure and Destination cannot be the same!");
        return;
      }


const dateDetails = { from, to,date };


sessionStorage.setItem("Datedetails", JSON.stringify(dateDetails));

    setTimeout(() => {
      navigate(`/busseat`);
    }, 1000);
    };


    return (
      <div>
        <section className="wrap">
          <div className="container">
            <div className="text-center">
              <h3 className="mb-4">
                India’s Leading <span className="tar_name">Electric Bus</span> Service for a <span>Greener Tomorrow! 🌱🚍</span>
              </h3>
            </div>

            <div className="d-flex align-items-center justify-content-evenly wrapped justify-content-center">
              {/* ✅ Filters "To" dropdown to exclude the selected "From" district */}
              <InputDropdown value={from} onChange={setFrom} options={districts} placeholder="Select Departure"/>
              <InputDropdown 
                  value={to} 
              onChange={setTo} 
              options={districts.filter((district) => district !== from)} 
              placeholder="Select Destination" 
              disabled={!from} 
            />
              <input type="date" className="loc" value={date} onChange={(e) => setDate(e.target.value)} />

              {/* Search Button */}
              <button className="Button" onClick={validateForm} disabled={loading}>
                {loading ? "Searching●●●◦◦" : "Search Bus"} <IoSearch className="icon" />
              </button>
            </div>
          </div>
        </section>

        {/* ✅ Display Bus List after Search */}
        {showBusList && (
  <section className="bus-list">
    <h3>Available Buses</h3>
    {buses.length > 0 ? (
      <ul>
        {buses.map((bus, index) => (
          <li key={index} className="bus-item" onClick={() => navigate("/busseat", { state: { bus } })}>
            <strong>{bus.bus_name}</strong> - ₹{bus.price}
            <p>Departure: {bus.departure_time} | Arrival: {bus.arrival_time}</p>
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-danger">No buses found for this route.</p>
    )}
  </section>
)}
      <Carousel/>
        <BookingOffers />
        <UserHome />
      </div>
    );
  };

  export default Searchlist;