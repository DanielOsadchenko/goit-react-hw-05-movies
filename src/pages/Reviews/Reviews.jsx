import { useState, useEffect } from "react";
import { getReviewsById } from "components/API";
import { useParams } from "react-router-dom";


export default function Reviews() {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (movieId) {
      getReviewsById(movieId).then(array => setReviews(array.results));
    }
  }, [movieId]);

  return <div>
    {!reviews && <p>Sorry! We don't have any reviews for this movie.</p>}
    {reviews && reviews.map(({author, content, id}) => {
      return <div key={id}>
        <p>Author: {author}</p>
        <p>{content}</p>
      </div>
    })}
  </div>
  
}