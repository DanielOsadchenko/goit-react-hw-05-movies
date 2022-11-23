import { useState, useEffect } from "react";
import { getTrends} from "components/API";
import { FilmCard } from "components/FilmCard/FilmCard";
import { Gallery } from "components/Gallery/Gallery";
import { Title, Container } from "./Home.styled";

export default function Home() {
  const [trends, setTrends] = useState();
  

  useEffect(() => {
    getTrends().then(films => setTrends(films.results))
  }, [])

  return <Container>
    <Title>Trending films</Title>
    <Gallery>
      {trends && trends.map(({ title, poster_path, id, name }) => {
      return <FilmCard key={id}
        name={name}
        title={title}
        id={id}
        poster={poster_path}/>})}
    </Gallery>
    
  
  </Container>
  
}