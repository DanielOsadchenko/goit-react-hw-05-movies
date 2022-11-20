import { IMAGE_URL } from "components/API";
import { Link, useLocation } from "react-router-dom";


export const FilmCard = ({ name, title, poster, id }) => {
  
  const location = useLocation();
  return <li>
    <Link to={`/movies/${id}`} state={{from: location}}>
      <p>{name}{title}</p>
      <img src={`${IMAGE_URL}${poster}`} alt={title} />
    </Link>
      </li>}