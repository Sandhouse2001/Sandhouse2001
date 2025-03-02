import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router";
import { Link } from "react-router";

type Bus = {
  id: number;
  bus_name: string;
  from_location: string;
  to_location: string;
  departure_time: string;
  arrival_time: string;
  price: number;
};
type Seat = {
  id: number;
  seat_name: string;
  is_lower: boolean;
  is_booked: boolean;
};


const SeatSelection: React.FC<{
  seats: Seat[];
  onSeatClick: (seat: string) => void;
  selectedSeats: Set<string>;
}> = ({ seats, onSeatClick, selectedSeats }) => {
  const upperDeck = seats.filter((seat) => !seat.is_lower);
  const lowerDeck = seats.filter((seat) => seat.is_lower);

  return (
    <div className="mb-4 mt-3">
      <h5 className="font-bold">Select Seats</h5>

      <h6 className="font-bold mt-3">Upper Deck</h6>
      <div className="grid border px-0 py-3 shadow" style={{ display: "grid", gridTemplateColumns: "repeat(5, auto)", gap: "50px", justifyContent: "center" }}>
        {upperDeck.map((seat) => (
          <div
            key={seat.id}
            onClick={() => onSeatClick(seat.seat_name)}
            style={{
              width: "100px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer",
              backgroundColor: seat.is_booked ? "#ff4d4d" : selectedSeats.has(seat.seat_name) ? "#4ade80" : "#d1d5db",
              border: selectedSeats.has(seat.seat_name) ? "2px solid #22c55e" : "1px solid #ccc",}}>
            {seat.seat_name}
          </div>
        ))}
      </div>

      {/* Lower Deck */}
      <h6 className="font-bold mt-3">Lower Deck</h6>
      <div className="grid border px-0 py-3 shadow" style={{ display: "grid", gridTemplateColumns: "repeat(5, auto)", gap: "50px", justifyContent: "center" }}>
        {lowerDeck.map((seat) => (
          <div
            key={seat.id}
            onClick={() => onSeatClick(seat.seat_name)}
            style={{
              width: "100px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer",
              backgroundColor: seat.is_booked ? "#ff4d4d" : selectedSeats.has(seat.seat_name) ? "#4ade80" : "#d1d5db",
              border: selectedSeats.has(seat.seat_name) ? "2px solid #22c55e" : "1px solid #ccc",
            }}
          >
            {seat.seat_name}
          </div>
        ))}
      </div>
    </div>
  );
};


  const BusList: React.FC = () => {
  const [buses, setBuses] = useState<Bus[]>([]);
  
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [selectedBus, setSelectedBus] = useState<number | null>(null);
  const [selectedSeats, setSelectedSeats] = useState<Set<string>>(new Set());
  const [seats, setSeats] = useState<Seat[]>([]);
  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const storedDetails = sessionStorage.getItem("Datedetails");
    console.log("Stored Details:",storedDetails);

    if (storedDetails) {
      const { from, to, date } = JSON.parse(storedDetails);
      setFrom(from);
      setTo(to);
      setDate(date);
    }
  }, []); 

  useEffect(() => {

    if (!from || !to || !date) return;

    const fetchBuses = async () => {
      setLoading(true);
      try {
        console.log("Fetching buses for:", { from, to, date });

        const response = await axios.get("http://localhost:3000/buses/search", {
          params: { from_location: from, to_location: to, travel_date: date },
        });

        setBuses(response.data);
        sessionStorage.setItem("busData", JSON.stringify(response.data)); // ✅ Store fetched buses
      } catch (error) {
        console.error("Error fetching buses:", error);
        setError("Failed to fetch buses. Loading saved data...");

        const storedBuses = sessionStorage.getItem("busData");
        if (storedBuses) {
          setBuses(JSON.parse(storedBuses));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBuses();
  }, [from, to, date]); // ✅ Runs when 'from', 'to', or 'date' updates



  const fetchSeats = async (busName: string) => {
    setSeats([]);
    setSelectedSeats(new Set());
    try {
      const response = await axios.get("http://localhost:3000/seat", { params: { bus_name: busName } });
      setSeats(response.data);
      localStorage.setItem("seatData", JSON.stringify(response.data)); // ✅ Store in localStorage
    } catch (error) {
      console.error("Error fetching seats:", error);
      const storedSeats = localStorage.getItem("seatData");
      if (storedSeats) {
        setSeats(JSON.parse(storedSeats));
      }
    }
  };

  // ✅ Handle Seat Selection
  // const handleSeatSelection = (seat: string) => {
  //   setSelectedSeats((prevSeats) => {
  //     const updatedSeats = new Set(prevSeats);
  //     updatedSeats.has(seat) ? updatedSeats.delete(seat) : updatedSeats.add(seat);
      
  //     localStorage.setItem("selectedSeats", JSON.stringify(Array.from(updatedSeats))); 
  //     return updatedSeats;
  //   });
  // };

  const handleSeatSelection = (seat: string) => {
    setSelectedSeats((prevSeats) => {
      const updatedSeats = new Set(prevSeats);
      if (updatedSeats.has(seat)) {
        updatedSeats.delete(seat);
      } else {
        updatedSeats.add(seat);
      }
       sessionStorage.setItem("selectedSeats", JSON.stringify(Array.from(updatedSeats)));
  
      return updatedSeats;
    });
  };



  // ✅ Show/Hide Seat Layout
  const toggleSeats = (busId: number, busName: string) => {
    if (selectedBus === busId) {
      setSelectedBus(null);
      setSeats([]);
      setSelectedSeats(new Set());
    } else {
      setSelectedBus(busId);
      fetchSeats(busName);
    }
  };

  return (
    <div className="container mx-auto p-5">
      <h2 className="mt-4">Available Buses</h2>
      <p>
        <strong>From:</strong> {from} → <strong>To:</strong> {to} | <strong>Date:</strong> {date}
      </p>

      {buses.map((bus) => (
        <div key={bus.id} className="border p-4 mb-5 rounded-lg shadow">
          <h3 className="text-lg font-semibold">{bus.bus_name || "Bus Name Not Available"}</h3>
          <p>
            From: {bus.from_location} → To: {bus.to_location} <br />
            Departure: {bus.departure_time || "-"} | Arrival: {bus.arrival_time || "-"} <br />
            Price: ₹{bus.price || "N/A"}
          </p>
          <Button onClick={() => toggleSeats(bus.id, bus.bus_name)} className="mt-3">
            {selectedBus === bus.id ? "Hide Seats" : "View Seats"}
          </Button>

          {selectedBus === bus.id && seats.length > 0 && (
            <div>
              <SeatSelection seats={seats} onSeatClick={handleSeatSelection} selectedSeats={selectedSeats} />
              {selectedSeats.size > 0 && <Link to="/addlist">
                <Button className="mt-3">Proceed</Button></Link>}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BusList;