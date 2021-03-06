import { useState, useEffect } from "react";
import { fetchTopVideo } from "../services/video-api";
import { Link, useLocation } from "react-router-dom";

export default function HomeView() {
  const location = useLocation();

  console.log(location);
  const [topVideoList, setTopVideoList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const getVideo = async () => {
      try {
        const data = await fetchTopVideo();
        console.log(data);
        setTopVideoList(data);
        setIsLoading(false);
      } catch (error) {
        setError({ error });
        setIsLoading(false);
      }
    };
    getVideo();
  }, []);

  return (
    <>
      {topVideoList && (
        <ul>
          {topVideoList.map((video) => (
            <li key={video.id}>
              <Link
                to={{
                  pathname: `/movies/${video.id}`,
                }}
                state={{ from: location }}
              >
                {video.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
