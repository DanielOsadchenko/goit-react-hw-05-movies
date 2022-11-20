import { IMAGE_URL } from "components/API";
import { Link } from "react-router-dom";


export const FilmCard = ({name, title, poster, id}) => {
  return <li>
    <Link to={`/movies/${id}`}>
      <p>{name}{title}</p>
      <img src={`${IMAGE_URL}${poster}`} alt={title} />
    </Link>
      </li>}