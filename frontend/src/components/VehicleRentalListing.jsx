import { Link } from "react-router-dom";

const VehicleRentalListing = ({ vehicleRental }) => {
  return (
    <div className="rental-preview">
      <Link to={`/rentals/${vehicleRental.id}`}></Link>
      <h2>{vehicleRental.vehicleModel}</h2>
      <p>Category: {vehicleRental.category}</p>
      <p>Daily Price: ${vehicleRental.dailyPrice.toFixed(2)}</p>
      <p>Status: {vehicleRental.availabilityStatus}</p>
      <p>
        Location: {vehicleRental.location.city}, {vehicleRental.location.state}
      </p>
    </div>
  );
};

export default VehicleRentalListing;
