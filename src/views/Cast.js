import { useState, useEffect } from "react";
import { fetchCast } from "../services/video-api";

export default function Cast({ id }) {
  const [staff, setStaff] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const getStaff = async () => {
      try {
        const data = await fetchCast(id);
        console.log(data);
        setStaff(data);
        setIsLoading(false);
      } catch (error) {
        setError({ error });
        setIsLoading(false);
      }
    };
    getStaff();
  }, [id]);

  return (
    <>
      {staff && (
        <ul>
          {staff.map((actor) => (
            <li key={actor.id}>
              <img
                src={"https://image.tmdb.org/t/p/w300/" + actor.profile_path}
                alt={actor.name}
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
