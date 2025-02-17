import React, { useState } from "react";
import "../pages/StreamList.css";

const StreamList: React.FC = () => {
  const [movie, setMovie] = useState<string>("");
  const [movies, setMovies] = useState<string[]>([]);

  const addMovie = (e: React.FormEvent) => {
    e.preventDefault();
    if (!movie.trim()) return;
    if (movies.includes(movie.trim())) {
      alert("Movie already exists in the list!");
      return;
    }
    setMovies([...movies, movie.trim()]);
    setMovie("");
  };

  const removeMovie = (title: string) => {
    setMovies(movies.filter((m) => m !== title));
  };

  return (
    <div className="streamlist-container">
      <h2>My Streaming List</h2>
      <form onSubmit={addMovie}>
        <input
          type="text"
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
          placeholder="Enter movie name"
        />
        <button type="submit">Add Movie</button>
      </form>
      <ul>
        {movies.map((m) => (
          <li key={m}>
            {m} <button onClick={() => removeMovie(m)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StreamList;