import { useParams, Outlet, useLocation } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import { getFilmById } from "components/API";
import { IMAGE_URL } from "components/API";
import image from 'images/placeholder.jpg';
import { Container, InfoContainer, ButtonLink } from "./MovieDetails.styled";



export default function MovieDetails() {
  const [film, setFilm] = useState({});
  const { movieId } = useParams();
  const location = useLocation()

  useEffect(() => {
    if (movieId) {
      getFilmById(movieId).then(setFilm);
    }
  }, [movieId]);

  const date = () => {
    if (film.first_air_date) {
      return film.first_air_date.slice(0, 4)
    }
    if (film.release_date) {
      return film.release_date.slice(0, 4)
    }
    if (film.first_air_date === '' || film.release_date === '') {
      return film.status
    }
  };

  const poster = () => {
    if (film.poster_path) {
      return `${IMAGE_URL}${film.poster_path}`
    }
    return image
  };

  return <div>
    <ButtonLink to={location.state?.from ?? '/movies'}>Back</ButtonLink>
    <Container>
      <img src={poster()} alt={film.title} />
      <InfoContainer>
        <p><span>{film.title}{film.name}</span><span>{date()}</span></p>

        <p>{film.tagline}</p>

        <p><span>User Score:</span><span>{Math.round((film.vote_average / 10) * 100)}%</span></p>

        <p>Overview: {film.overview}</p>
        

        <p>Genres: {film.genres && film.genres.map(genre => {
          return <span key={genre.id}>| {genre.name} | </span>
        })}</p>
        
        <div>
        <p>Additional information</p>
          <ButtonLink to={`/movies/${movieId}/Cast`} state={{ from: location.state?.from ?? 'movies' }}>Cast</ButtonLink>
        <ButtonLink to={`/movies/${movieId}/Reviews`} state={{ from: location.state?.from ?? 'movies' }}>Reviews</ButtonLink>
      </div>
      </InfoContainer>
      </Container>
      
      <Suspense fallback={null}>
        <Outlet/>
      </Suspense>
    
  </div>;
};