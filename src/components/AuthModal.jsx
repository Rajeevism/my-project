import React, { useState, useEffect } from "react";
import "../styles/AuthModal.css";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const AuthModal = ({ isOpen, onClose }) => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (isOpen) {
      setIsLoginMode(true);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setError("");
      setSuccessMessage("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSocialLogin = async (provider) => {
    setError("");
    setSuccessMessage("");
    try {
      await signInWithPopup(auth, provider);
      setSuccessMessage("Logged in Successfully!");
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (err) {
      console.error("Social Login Error:", err.code);
      setError("Could not complete social login. Please try again.");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccessMessage("");

    if (!isLoginMode && password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      if (isLoginMode) {
        await signInWithEmailAndPassword(auth, email, password);
        setSuccessMessage("Logged in Successfully!");
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        setSuccessMessage("Account created successfully!");
      }
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (err) {
      console.error("Firebase Auth Error:", err.code);
      switch (err.code) {
        case "auth/user-not-found":
        case "auth/invalid-email":
          setError("No account found with this email.");
          break;
        case "auth/wrong-password":
          setError("Incorrect password. Please try again.");
          break;
        case "auth/email-already-in-use":
          setError("This email is already registered. Please login.");
          break;
        default:
          setError("An error occurred. Please try again.");
          break;
      }
    }
  };

  const toggleMode = (e) => {
    e.preventDefault();
    setIsLoginMode((prev) => !prev);
    setError("");
    setSuccessMessage("");
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <h2>{isLoginMode ? "Login" : "Sign Up"}</h2>

        {isLoginMode && (
          <>
            <div className="auth-options">
              <button
                className="social-btn google"
                onClick={() => handleSocialLogin(new GoogleAuthProvider())}
              >
                <FcGoogle className="social-icon" /> Continue with Google
              </button>
              <button
                className="social-btn github"
                onClick={() => handleSocialLogin(new GithubAuthProvider())}
              >
                <FaGithub className="social-icon" /> Continue with GitHub
              </button>
              {/* --- The Facebook button has been deleted --- */}
            </div>
            <div className="divider">or</div>
          </>
        )}

        <form className="auth-form" onSubmit={handleSubmit}>
          {/* The rest of the form is unchanged */}
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!isLoginMode && (
            <input
              type="password"
              placeholder="Confirm Password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          )}
          {error && <p className="error-message">{error}</p>}
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
          <button type="submit" disabled={!!successMessage}>
            {isLoginMode ? "Login" : "Create Account"}
          </button>
          {isLoginMode && (
            <div className="extras">
              <a href="#" className="forgot-password-link">
                Forgot Password?
              </a>
              <button type="button" className="phone-login-btn">
                Login via Phone
              </button>
            </div>
          )}
          <p className="switch-msg">
            {isLoginMode
              ? "Don't have an account?"
              : "Already have an account?"}
            <a href="#" onClick={toggleMode}>
              {isLoginMode ? " Sign Up" : " Login"}
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
