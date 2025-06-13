// src/pages/HomePage.jsx

import React from "react";
import BookCard from "../components/BookCard"; // Make sure to import BookCard
import "../styles/HomePage.css"; // We'll add styles to this file

const HomePage = () => {
  // Richer dummy data with condition and image placeholders
  const allBooks = [
    {
      id: 1,
      title: "Data Structures",
      price: 250,
      condition: "Used",
      imageUrl: "https://placehold.co/220x200/a7c7e7/333?text=DS",
    },
    {
      id: 2,
      title: "History of India",
      price: 150,
      condition: "Used",
      imageUrl: "https://placehold.co/220x200/f0e68c/333?text=History",
    },
    {
      id: 3,
      title: "Calculus",
      price: 300,
      condition: "Used",
      imageUrl: "https://placehold.co/220x200/d3d3d3/333?text=Calculus",
    },
    {
      id: 4,
      title: "Machine Learning",
      price: 350,
      condition: "Used",
      imageUrl: "https://placehold.co/220x200/b2f2bb/333?text=ML",
    },
    {
      id: 5,
      title: "React Explained",
      price: 500,
      condition: "New",
      imageUrl: "https://placehold.co/220x200/add8e6/333?text=React",
    },
    {
      id: 6,
      title: "The Python Guide",
      price: 450,
      condition: "New",
      imageUrl: "https://placehold.co/220x200/ffd700/333?text=Python",
    },
    {
      id: 7,
      title: "Intro to Economics",
      price: 320,
      condition: "New",
      imageUrl: "https://placehold.co/220x200/90ee90/333?text=Eco",
    },
    {
      id: 8,
      title: "World Atlas",
      price: 600,
      condition: "New",
      imageUrl: "https://placehold.co/220x200/e6e6fa/333?text=Atlas",
    },
  ];

  // Filter books into categories
  const usedBooks = allBooks.filter((book) => book.condition === "Used");
  const newBooks = allBooks.filter((book) => book.condition === "New");

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <h2>What would you like to do?</h2>
        <div className="hero-buttons">
          <button className="buy-btn">📘 Buy Books</button>
          <button className="sell-btn">♻️ Sell Books/Papers</button>
        </div>
      </section>

      {/* Old Books Section */}
      <section className="book-section">
        <h3>Old Books</h3>
        <div className="book-grid">
          {usedBooks.map((book) => (
            <BookCard
              key={book.id}
              title={book.title}
              price={book.price}
              condition={book.condition}
              imageUrl={book.imageUrl}
            />
          ))}
        </div>
      </section>

      {/* New Books Section */}
      <section className="book-section">
        <h3>New Books</h3>
        <div className="book-grid">
          {newBooks.map((book) => (
            <BookCard
              key={book.id}
              title={book.title}
              price={book.price}
              condition={book.condition}
              imageUrl={book.imageUrl}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
