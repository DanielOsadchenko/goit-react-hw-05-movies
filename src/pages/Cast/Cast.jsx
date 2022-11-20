import { useState, useEffect } from "react";
import { getCastById } from "components/API";
import { useParams } from "react-router-dom";
import { CastCard } from "components/CastCard/CastCard";
import { Gallery } from "components/Gallery/Gallery";

export default function Cast() {
  const [actors, setActors] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (movieId) {
      getCastById(movieId).then(array => setActors(array.cast))
    }
  }, [movieId])

  return <div>
    <Gallery>
      {!actors && <p>Sorry! We have no information about the actors.</p>}
      {actors && actors.map(({id, profile_path, name, character}) => {
        return <CastCard key={id}
          poster={profile_path}
          name={name}
          character={character}
        />
      })}
    </Gallery>
    
  </div>
}