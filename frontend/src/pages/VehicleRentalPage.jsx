import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const VehicleRentalPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [vehicleRental, setVehicleRental] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVehicleRental = async () => {
      try {
        const res = await fetch(`/api/vehicleRentals/${id}`);
        if (!res.ok) {
          throw new Error("Vehicle rental not found");
        }
        const data = await res.json();
        setVehicleRental(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVehicleRental();
  }, [id]);

  const deleteVehicleRental = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this rental?",
    );
    if (!confirmDelete) return;

    try {
      const res = await fetch(`/api/vehicleRentals/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error("Failed to delete vehicle rental");
      }
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div className="error">{error}</div>;

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
