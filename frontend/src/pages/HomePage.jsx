import { useEffect, useState } from "react";
import VehicleRentalListings from "../components/VehicleRentalListings";

const Home = () => {
  const [vehicleRentals, setVehicleRentals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVehicleRentals = async () => {
      try {
        const res = await fetch("/api/vehicleRentals");
        if (!res.ok) {
          throw new Error("Could not fetch vehicle rentals");
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
  }, []);

  return (
    <div className="home">
      {error && <div className="error">{error}</div>}
      {isLoading && <div>Loading...</div>}
      {!isLoading && !error && vehicleRentals.length === 0 && (
        <p>No vehicle rentals yet. Add the first one!</p>
      )}
      {vehicleRentals.length > 0 && (
        <VehicleRentalListings vehicleRentals={vehicleRentals} />
      )}
    </div>
  );
};

export default Home;
