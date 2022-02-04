import { useState, useEffect } from "react";
import { fetchWord } from "../services/video-api";
import { Link } from "react-router-dom";

export default function MoviesPage() {
  const [query, setQuery] = useState("");
  const [word, setWord] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movieList, setMovieList] = useState(null);

  const handleChange = (e) => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setWord(query);
  };

  useEffect(() => {
    if (word === "") {
      return;
    }
    setIsLoading(true);
    const getVideo = async () => {
      try {
        const data = await fetchWord(word);
        console.log(data);
        setMovieList(data);
        setIsLoading(false);
        setQuery("");
      } catch (error) {
        setError({ error });
        setIsLoading(false);
      }
    };
    getVideo();
  }, [word]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={query}
          onChange={handleChange}
        />
        <button type="submit">search</button>
      </form>
      {movieList && (
        <ul>
          {movieList.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
