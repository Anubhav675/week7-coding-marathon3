import Navbar from "../components/Navbar";
import VehicleRentalListings from "../components/VehicleRentalListings";
import { useEffect, useState } from "react";

const Home = () => {
  const [vehicleRentals, setVehicleRentals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVehicleRentals = async () => {
      try {
        const res = await fetch("/api/vehicleRentals");
        if (!res.ok) {
          throw new Error("Bro!!!! I cannot fetch vehicle rentals");
        }
        const data = await res.json();
        setVehicleRentals(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVehicleRentals();
  });

  return (
    <div className="home">
      {error && <div className="error">{error}</div>}
      {isLoading && <div>Loading...</div>}
      {!isLoading && !error && vehicleRentals.length === 0 && (
        <p>
          No shhhhhiiiii there isnot vehicle cuhh, add the first one homeiii
        </p>
      )}
      <VehicleRentalListings />
    </div>
  );
};

export default Home;
