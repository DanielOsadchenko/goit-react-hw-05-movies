import { useState, useEffect } from "react";
import { getFilmByQuery } from "components/API";
import { FilmCard } from "components/FilmCard/FilmCard";
import { Gallery } from "components/Gallery/Gallery";
import { SearchForm } from "components/SearchForm/SearchForm";


export const Movies = () => {
  const [inputQuery, setInputQuery] = useState('');
  const [page, setPage] = useState(1);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    if (inputQuery.trim() !== '') {
      getFilmByQuery(page, inputQuery).then((films) => setFilms(films.results))
    }
  }, [inputQuery, page])
  


  return <div>
    <SearchForm onSubmit={setInputQuery}/>
    <Gallery>
      {films.map(({ title, poster_path, id, name }) => {
      return <FilmCard key={id}
        name={name}
        title={title}
        id={id}
        poster={poster_path}
        />})}
    </Gallery>
  </div>
}