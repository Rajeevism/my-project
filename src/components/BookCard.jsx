import React from 'react';
import '../styles/HomePage.css';

const BookCard = ({ title, price }) => {
  return (
    <div className="book-card">
      <div className="book-image"></div>
      <h3>{title}</h3>
      <p>₹{price} - Used</p>
    </div>
  );
};

export default BookCard;
