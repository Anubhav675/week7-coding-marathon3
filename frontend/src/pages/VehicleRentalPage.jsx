const VehicleRentalPage = () => {
  return (
    <div className="rental-preview">
      <h2>{vehicleRental.vehicleModel}</h2>
      <p>
        <strong>Category:</strong> {vehicleRental.category}
      </p>
      <p>
        <strong>Description:</strong> {vehicleRental.description}
      </p>
      <p>
        <strong>Daily Price:</strong> ${vehicleRental.dailyPrice}
      </p>
      <p>
        <strong>Status:</strong> {vehicleRental.availabilityStatus}
      </p>
      <p>
        <strong>Location:</strong> {vehicleRental.location.city},{" "}
        {vehicleRental.location.state}
      </p>

      <h3>Agency</h3>
      <p>
        <strong>Name:</strong> {vehicleRental.agency.name}
      </p>
      <p>
        <strong>Email:</strong> {vehicleRental.agency.contactEmail}
      </p>
      {vehicleRental.agency.fleetSize !== undefined && (
        <p>
          <strong>Fleet Size:</strong> {vehicleRental.agency.fleetSize}
        </p>
      )}

      <h3>Details</h3>
      <p>
        <strong>Insurance Policy:</strong> {vehicleRental.insurancePolicy}
      </p>
      <p>
        <strong>Listed on:</strong>{" "}
        {new Date(vehicleRental.listingDate).toLocaleDateString()}
      </p>
      {vehicleRental.bookingDeadline && (
        <p>
          <strong>Booking Deadline:</strong>{" "}
          {new Date(vehicleRental.bookingDeadline).toLocaleDateString()}
        </p>
      )}

      <div className="actions">
        <Link to={`/edit-rental/${vehicleRental.id}`} className="btn">
          Edit
        </Link>
        <button className="btn btn-danger" onClick={deleteVehicleRental}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default VehicleRentalPage;
