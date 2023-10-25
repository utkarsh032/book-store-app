import { useEffect, useState } from "react";
import BookCards from "../components/BookCards";

const FavoriteBook = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div>
      <BookCards books={books} headline="Best Seller Books" />
    </div>
  );
};

export default FavoriteBook;
