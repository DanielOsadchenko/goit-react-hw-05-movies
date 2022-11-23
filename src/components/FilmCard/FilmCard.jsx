import { IMAGE_URL } from "components/API";
import { Link, useLocation } from "react-router-dom";
import { Item, Image, Title } from "./FilmCard.styled";

export const FilmCard = ({ name, title, poster, id }) => {
  
  const location = useLocation();
  return <Item>
    <Link to={`/movies/${id}`} state={{from: location}}>
      <Title>{name}{title}</Title>
      <Image src={`${IMAGE_URL}${poster}`} width='302px' alt={title} />
    </Link>
      </Item>}