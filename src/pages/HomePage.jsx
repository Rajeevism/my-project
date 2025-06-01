import React from "react";
import NavBar from "../components/NavBar";
import BookCard from "../components/BookCard";
import "../styles/HomePage.css";

const HomePage = () => {
  const books = [
    { title: "Data Structures", price: 250 },
    { title: "History of India", price: 150 },
    { title: "Calculus", price: 300 },
    { title: "Machine Learning", price: 350 },
  ];

  return (
    <div className="homepage">
      <NavBar />

      {/* Hero Section */}
      <section className="hero">
        <h2>What would you like to do?</h2>
        <div className="hero-buttons">
          <button className="buy-btn">📘 Buy Books</button>
          <button className="sell-btn">♻️ Sell Books/Papers</button>
        </div>
      </section>

      {/* Old Books Section */}
      <section className="old-books">
        <h3>Old Books</h3>
        <div className="book-grid">
          {books.map((book, index) => (
            <BookCard key={index} title={book.title} price={book.price} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
