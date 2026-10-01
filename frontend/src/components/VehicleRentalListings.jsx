import VehicleRentalListing from "./VehicleRentalListing";

const VehicleRentalListings = ({ vehicleRentals }) => {
  return (
    <div className="rental-list">
      {vehicleRentals.length === 0 ? (
        <h2>No vehicle rentals found</h2>
      ) : (
        vehicleRentals.map((vehicleRental) => (
          <VehicleRentalListing
            key={vehicleRental.id}
            vehicleRental={vehicleRental}
          />
        ))
      )}
    </div>
  );
};

export default VehicleRentalListings;
