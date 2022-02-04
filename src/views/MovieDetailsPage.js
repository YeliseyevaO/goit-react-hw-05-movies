import { useState, useEffect } from "react";
import { useParams, Link, Route, Routes, useNavigate } from "react-router-dom";
import { fetchVideo } from "../services/video-api";
import Cast from "./Cast";
import Rewies from "./Rewies";
import styles from "./MoviesDetailsPage.module.css";

export default function MovieDetailsPage() {
  let { movieId } = useParams();
  const navigate = useNavigate();
  const [video, setVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const getOneVideo = async () => {
      try {
        const data = await fetchVideo(movieId);
        console.log(data);
        setVideo(data);
        setIsLoading(false);
      } catch (error) {
        setError({ error });
        setIsLoading(false);
      }
    };
    getOneVideo();
  }, [movieId]);

  const foundGenres = () => {
    if (video === null) {
      return;
    }
    const { genres } = video;
    const genresList = genres.map((genre) => genre.name);
    return genresList.join(", ");
  };

  return (
    <>
      <button type="button" onClick={() => navigate(-1)}>
        Go back
      </button>
      {video && (
        <>
          {" "}
          <div className={styles.box}>
            <img
              src={"https://image.tmdb.org/t/p/w300/" + video.poster_path}
              alt={video.title}
              className={styles.img}
            />
            <div>
              <h2>{video.title}</h2>
              <p>User Score: {video.popularity}</p>
              <p>Overview: {video.overview}</p>
              <p>Genres: {foundGenres()}</p>
            </div>
          </div>
          <div>
            <p>Additional information</p>
            <ul>
              <li>
                <Link to={`/movies/${movieId}/cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`/movies/${movieId}/rewies`}>Rewies</Link>
              </li>
            </ul>
          </div>
          <Routes>
            <Route path="cast" element={<Cast id={movieId} />} />
            <Route path="rewies" element={<Rewies id={movieId} />} />
          </Routes>
        </>
      )}
    </>
  );
}
