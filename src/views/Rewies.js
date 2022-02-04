import { useState, useEffect } from "react";
import { fetchInfo } from "../services/video-api";

export default function Rewies({ id }) {
  const [info, setInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const getInfo = async () => {
      try {
        const data = await fetchInfo(id);
        console.log(data);
        setInfo(data);
        setIsLoading(false);
      } catch (error) {
        setError({ error });
        setIsLoading(false);
      }
    };
    getInfo();
  }, [id]);

  if (info === []) {
    return <p>We don't have any rewies for this movie</p>;
  }

  return (
    <>
      {info && (
        <ul>
          {info.map((inf) => (
            <li key={inf.id}>
              <p>Author: {inf.author}</p>
              <p> {inf.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
