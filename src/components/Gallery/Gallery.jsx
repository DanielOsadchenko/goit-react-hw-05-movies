import { GalleryList } from "./Gallery.styled"

export const Gallery = ({ children }) => {
  return <GalleryList>
    {children}
  </GalleryList>
}