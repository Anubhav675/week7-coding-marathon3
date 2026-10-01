import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages & components
import Home from "./pages/HomePage";
import AddVehicleRentalPage from "./pages/AddVehicleRentalPage";
import Login from "./pages/Login";
import Signup from "./pages/SignupPage"
import VehicleRentalPage from "./pages/VehicleRentalPage";
import EditVehicleRentalPage from "./pages/EditVehicleRentalPage";
import Navbar from "./components/Navbar";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("user") ? true : false;
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
        />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/add-rental"
              element={<AddVehicleRentalPage />}
            />

            <Route
              path="/login"
              element={
                <Login
                  setIsAuthenticated={setIsAuthenticated}
                />
              }
            />
            
            <Route
              path="/signup"
              element={
                <Signup
                  setIsAuthenticated={setIsAuthenticated}
                />
              }
            />
            

            <Route
              path="/vehicle-rentals/:id"
              element={<VehicleRentalPage />}
            />

            <Route
              path="/edit-rental/:id"
              element={<EditVehicleRentalPage />}
            />

            <Route
              path="*"
              element={<NotFoundPage />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;