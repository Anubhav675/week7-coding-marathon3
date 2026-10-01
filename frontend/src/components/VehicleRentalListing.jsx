import { Link } from "react-router-dom";

// One small card. Clicking the title opens the details page.
const VehicleRentalListing = ({ vehicleRental }) => {
  return (
    <div className="rental-preview">
      <Link to={`/vehicle-rentals/${vehicleRental.id}`}>
        <h2>{vehicleRental.vehicleModel}</h2>
      </Link>
      <p>Category: {vehicleRental.category}</p>
      <p>Daily Price: ${vehicleRental.dailyPrice}</p>
      <p>
        Location: {vehicleRental.location.city}, {vehicleRental.location.state}
      </p>
      <p>Status: {vehicleRental.availabilityStatus}</p>
    </div>
  );
};

export default VehicleRentalListing;
