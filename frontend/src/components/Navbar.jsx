import { Link } from "react-router-dom";

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const handleLogout = () => {
    localStorage.removeItem("user");

    setIsAuthenticated(false);
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <h1>Vehicle Rental</h1>
      </Link>

      <div className="links">
        <Link to="/">Home</Link>

        {isAuthenticated && (
          <>
            <Link to="/add-rental">Add Rental</Link>

            <button onClick={handleLogout}>Logout</button>
          </>
        )}

        {!isAuthenticated && <Link to="/login">Login</Link>}
      </div>
    </nav>
  );
};

export default Navbar;
