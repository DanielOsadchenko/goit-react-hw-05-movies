import { IMAGE_URL } from "components/API";
import image from '../../images/persone.jpg';
import { Item } from "./CastCard.styled";


export const CastCard = ({ poster, name, character }) => {
  
  const imageSrc = () => {
    if (poster) {
      return `${IMAGE_URL}${poster}`
    }
    return image
  };
  return <Item>
    <img src={imageSrc()} alt={name} />
    <p>Name: {name}</p>
    <p> Character: {character}</p>
</Item>
}