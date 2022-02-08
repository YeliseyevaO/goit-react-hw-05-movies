import { useState, useEffect, lazy, Suspense } from "react";
import {
  useParams,
  Link,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import styles from "./MoviesDetailsPage.module.css";
import { fetchVideo } from "../services/video-api";

const Cast = lazy(() => import("./Cast"));
const Rewies = lazy(() => import("./Rewies"));

export default function MovieDetailsPage() {
  let { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
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
  const goBack = () => {
    navigate(location?.state?.from ?? "/home");
  };

  return (
    <>
      <button type="button" onClick={goBack}>
        Go back
      </button>
      {video && (
        <>
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
                <Link
                  to={`/movies/${movieId}/cast`}
                  state={{ from: location.state?.from }}
                >
                  Cast
                </Link>
              </li>
              <li>
                <Link
                  to={`/movies/${movieId}/rewies`}
                  state={{ from: location.state?.from }}
                >
                  Rewies
                </Link>
              </li>
            </ul>
          </div>
          <Suspense fallback={<h1>Загружаем...</h1>}>
            <Routes>
              <Route path="cast" element={<Cast id={movieId} />} />
              <Route path="rewies" element={<Rewies id={movieId} />} />
            </Routes>
          </Suspense>
        </>
      )}
    </>
  );
}
