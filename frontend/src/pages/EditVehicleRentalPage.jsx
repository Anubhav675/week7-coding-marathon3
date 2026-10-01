import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditVehicleRentalPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // Get the token we saved when logging in
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user ? user.token : null;


  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [vehicleModel, setVehicleModel] = useState("");
  const [category, setCategory] = useState("Economy");
  const [description, setDescription] = useState("");
  const [agencyName, setAgencyName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [fleetSize, setFleetSize] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [dailyPrice, setDailyPrice] = useState("");
  const [availabilityStatus, setAvailabilityStatus] = useState("available");
  const [bookingDeadline, setBookingDeadline] = useState("");
  const [insurancePolicy, setInsurancePolicy] = useState("");

  // Step 1: load the existing rental and fill the form with its values
  useEffect(() => {
    const fetchVehicleRental = async () => {
      try {
        const res = await fetch(`/api/vehicleRentals/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch vehicle rental");
        }
        const data = await res.json();

        setVehicleModel(data.vehicleModel);
        setCategory(data.category);
        setDescription(data.description);
        setAgencyName(data.agency.name);
        setContactEmail(data.agency.contactEmail);
        setFleetSize(data.agency.fleetSize ?? "");
        setCity(data.location.city);
        setState(data.location.state);
        setDailyPrice(data.dailyPrice);
        setAvailabilityStatus(data.availabilityStatus);
        // "2026-12-31T00:00:00.000Z" -> "2026-12-31" (the format <input type="date"> needs)
        setBookingDeadline(
          data.bookingDeadline ? data.bookingDeadline.slice(0, 10) : "",
        );
        setInsurancePolicy(data.insurancePolicy);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVehicleRental();
  }, [id]);

  // Step 2: send the changed values back with PUT
  const submitForm = async (e) => {
    e.preventDefault();

    const updatedVehicleRental = {
      vehicleModel,
      category,
      description,
      agency: {
        name: agencyName,
        contactEmail,
        fleetSize: fleetSize === "" ? undefined : Number(fleetSize),
      },
      location: { city, state },
      dailyPrice: Number(dailyPrice),
      availabilityStatus,
      bookingDeadline: bookingDeadline || undefined,
      insurancePolicy,
    };

    try {
      const res = await fetch(`/api/vehicleRentals/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedVehicleRental),
      });
      if (!res.ok) {
        throw new Error("Failed to update vehicle rental");
      }
      navigate(`/vehicle-rentals/${id}`);
    } catch (err) {
      setError(err.message);
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="create">
      <h2>Update Vehicle Rental</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={submitForm}>
        <label>Vehicle Model:</label>
        <input
          type="text"
          required
          value={vehicleModel}
          onChange={(e) => setVehicleModel(e.target.value)}
        />
        <label>Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Economy">Economy</option>
          <option value="Luxury">Luxury</option>
          <option value="SUV">SUV</option>
          <option value="Van">Van</option>
          <option value="Truck">Truck</option>
        </select>
        <label>Description:</label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label>Agency Name:</label>
        <input
          type="text"
          required
          value={agencyName}
          onChange={(e) => setAgencyName(e.target.value)}
        />
        <label>Agency Email:</label>
        <input
          type="email"
          required
          value={contactEmail}
          onChange={(e) => setContactEmail(e.target.value)}
        />
        <label>Fleet Size:</label>
        <input
          type="number"
          min="0"
          value={fleetSize}
          onChange={(e) => setFleetSize(e.target.value)}
        />
        <label>City:</label>
        <input
          type="text"
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <label>State:</label>
        <input
          type="text"
          required
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <label>Daily Price:</label>
        <input
          type="number"
          step="0.01"
          min="0"
          required
          value={dailyPrice}
          onChange={(e) => setDailyPrice(e.target.value)}
        />
        <label>Availability Status:</label>
        <select
          value={availabilityStatus}
          onChange={(e) => setAvailabilityStatus(e.target.value)}
        >
          <option value="available">Available</option>
          <option value="rented">Rented</option>
          <option value="maintenance">Maintenance</option>
        </select>
        <label>Booking Deadline:</label>
        <input
          type="date"
          value={bookingDeadline}
          onChange={(e) => setBookingDeadline(e.target.value)}
        />
        <label>Insurance Policy:</label>
        <input
          type="text"
          required
          value={insurancePolicy}
          onChange={(e) => setInsurancePolicy(e.target.value)}
        />
        <button>Update Vehicle Rental</button>
      </form>
    </div>
  );
};

export default EditVehicleRentalPage;