import React, { useState } from "react";
import "./AuthModal.css";

const AuthModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>Login / Signup</h2>

        <div className="auth-options">
          <button className="social-btn google">Continue with Google</button>
          <button className="social-btn github">Continue with GitHub</button>
          <button className="social-btn instagram">
            Continue with Instagram
          </button>
        </div>

        <div className="divider">or</div>

        <form className="auth-form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>

          <div className="extras">
            <button type="button" className="otp-btn">
              Send OTP to Email
            </button>
            <button type="button" className="phone-login-btn">
              Login via Phone
            </button>
          </div>

          <p className="switch-msg">
            Don't have an account? <a href="#">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
