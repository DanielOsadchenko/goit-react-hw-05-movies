import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFilmById } from "components/API";

export const MovieDetails = () => {
  const [film, setFilm] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    if (movieId) {
      getFilmById(movieId).then(setFilm);
    }
  }, [movieId]);
  
  
  return <div>Now showing product with id - {movieId}</div>;
};