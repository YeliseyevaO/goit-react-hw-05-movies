import { useState, useEffect } from "react";
import { fetchWord } from "../services/video-api";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function MoviesPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movieList, setMovieList] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      return;
    }
    navigate({ ...location, search: `?query=${query}` });
  };

  useEffect(() => {
    if (location.search === "") {
      return;
    }
    setIsLoading(true);
    const getVideo = async () => {
      const prevQuery = location.search.split("=")[1];
      try {
        const data = await fetchWord(prevQuery);
        console.log(data);
        setMovieList(data);
        setIsLoading(false);
        setQuery(prevQuery);
      } catch (error) {
        setError({ error });
        setIsLoading(false);
      }
    };
    getVideo();
  }, [location.search]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">search</button>
      </form>
      {movieList && (
        <ul>
          {movieList.map((movie) => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                }}
                state={{ from: location }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
