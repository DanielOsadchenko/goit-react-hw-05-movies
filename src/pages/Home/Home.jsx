import { useState, useEffect } from "react";
import { getTrends} from "components/API";
import { FilmCard } from "components/FilmCard/FilmCard";
import { Gallery } from "components/Gallery/Gallery";

export const Home = () => {
  const [trends, setTrends] = useState();
  

  useEffect(() => {
    getTrends().then(films => setTrends(films.results))
  }, [])

  return <div>
    <h2>The best films of today</h2>
    <Gallery>
      {trends && trends.map(({ title, poster_path, id, name }) => {
      return <FilmCard key={id}
        name={name}
        title={title}
        id={id}
        poster={poster_path}/>})}
    </Gallery>
    
  
  </div>
  
}