import React, { useState } from "react";

function LibraryManagement() {
  const [books, setBooks] = useState([
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 3, title: "1984", author: "George Orwell" }
  ]);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [search, setSearch] = useState("");

  const handleAddBook = () => {
    if (title.trim() === "" || author.trim() === "") {
      alert("Please enter both book title and author name.");
      return;
    }

    const newBook = {
      id: Date.now(),
      title,
      author
    };

    setBooks([...books, newBook]);
    setTitle("");
    setAuthor("");
  };

  const handleRemoveBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="experiment-section" id="experiment32">
      <div className="section-header">
        <h1>Experiment 3.2: Library Management UI</h1>
        <p>
          A React-based library management interface with search, add, and
          remove functionality using hooks and dynamic state management.
        </p>
      </div>

      <div className="library-container">
        <h2 className="library-title">Library Management System</h2>

        <div className="library-controls">
          <input
            type="text"
            placeholder="Search books..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="library-input full-width"
          />

          <div className="add-book-row">
            <input
              type="text"
              placeholder="Book Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="library-input"
            />

            <input
              type="text"
              placeholder="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="library-input"
            />

            <button onClick={handleAddBook} className="add-btn">
              Add Book
            </button>
          </div>
        </div>

        <div className="book-list">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <div key={book.id} className="book-card">
                <div>
                  <h3>{book.title}</h3>
                  <p>by {book.author}</p>
                </div>

                <button
                  onClick={() => handleRemoveBook(book.id)}
                  className="remove-btn"
                >
                  Remove
                </button>
              </div>
            ))
          ) : (
            <p className="no-books">No books found.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default LibraryManagement;