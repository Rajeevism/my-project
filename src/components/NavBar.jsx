import React from "react";
import logo from "../assets/appLogo.png";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

// 1. Import the useAuth hook and the signOut function
import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const NavBar = ({ onProfileClick }) => {
  // 2. Get the current user from our context
  const { currentUser } = useAuth();

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLogout = () => {
    signOut(auth).catch((error) => console.error("Logout Error", error));
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/" onClick={handleHomeClick}>
          <img src={logo} alt="E-Paper Hub" className="app-logo" />
        </Link>
      </div>
      <div className="nav-menu">
        <Link to="/" className="nav-link" onClick={handleHomeClick}>
          Home
        </Link>
        <Link to="/cart" className="nav-link">
          My Cart
        </Link>

        {/* 3. Conditional Rendering: Show different links based on login status */}
        {currentUser ? (
          // If user is logged in, show their email and a Logout button
          <>
            <span className="nav-user-email">
              {currentUser.displayName || currentUser.email}
            </span>
            <button onClick={handleLogout} className="nav-link-button">
              Logout
            </button>
          </>
        ) : (
          // If user is not logged in, show the Profile button
          <a href="#" className="nav-link" onClick={onProfileClick}>
            Profile
          </a>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
