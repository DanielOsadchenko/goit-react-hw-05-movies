import { useState, useEffect } from "react";
import { getFilmByQuery } from "components/API";
import { FilmCard } from "components/FilmCard/FilmCard";
import { Gallery } from "components/Gallery/Gallery";
import { SearchForm } from "components/SearchForm/SearchForm";
import { useSearchParams } from "react-router-dom";
import { Pagination, Page, Button } from "./Movies.styled";


export default function Movies() {
  const [page, setPage] = useState(1);
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (query) {
      getFilmByQuery(page, query).then((films) => {
        setFilms(films.results);
        setTotalPages(films.total_pages);})
    }
  }, [page, query])

  
  const changeUrl = params => {
    setSearchParams(params !== '' ? { query: params } : {})
    setPage(1);
  }

  

  return <div>
    <SearchForm onSubmit={changeUrl} />
    <Gallery>
      {films && films.map(({ title, poster_path, id, name }) => {
        window.scrollBy(0,-200);
      return <FilmCard key={id}
        name={name}
        title={title}
        id={id}
        poster={poster_path}
        />})}
    </Gallery>
    <Pagination>
      {page === 1 && totalPages > 1 && <Button type="button" onClick={() => { setPage(prev => prev - 1) }} disabled>Previous Page</Button>}
      {totalPages > 1 && page > 1 && <Button type="button" onClick={() => { setPage(prev => prev - 1) }}>Previous Page</Button>}
      {films.length > 1 && <Page>Page: {page}</Page>}
      {totalPages > 1 && page < totalPages &&  <Button type="button" onClick={() => { setPage(prev => prev + 1) }}>Next Page</Button>}
      {totalPages > 1 && page === totalPages && <Button type="button" onClick={() => { setPage(prev => prev + 1)}} disabled>Next Page</Button>}
    </Pagination>
    
    
  </div>
}