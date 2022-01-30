import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchVideo } from "../services/video-api";

export default function MovieDetailsPage() {
  let { movieId } = useParams();
  const [video, setVideo] = useState({});
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

  return (
    <>
      {video && (
        <>
          <img src={video.backdrop_path} alt={video.title} />
          <h2>{video.title}</h2>
          <p>User Score: {video.popularity}</p>
          <p>Overview:{video.overview}</p>
          <p>Genres:{video.genres.name}</p>
        </>
      )}
    </>
  );
}
