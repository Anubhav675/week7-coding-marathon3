import VehicleRentalListing from "./VehicleRentalListing";

// Receives the array of rentals from HomePage and draws one card per rental
const VehicleRentalListings = ({ vehicleRentals }) => {
  return (
    <div className="rental-list">
      {vehicleRentals.map((vehicleRental) => (
        <VehicleRentalListing
          key={vehicleRental.id}
          vehicleRental={vehicleRental}
        />
      ))}
    </div>
  );
};

export default VehicleRentalListings;
