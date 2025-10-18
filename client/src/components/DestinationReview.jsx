import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./DestinationReview.css";

export function DestinationReview() {
  const [reviews, setReviews] = useState([]);

  const params = useParams();
  const destinationId = params.id;

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:8080/destination/${destinationId}`
      );
      const data = await response.json();
      setReviews(data.reviews);
    }
    fetchData();
  }, [destinationId]);

  return (
    <div>
      <h3>Reviews:</h3>
      {reviews.map((review) => (
        <div key={review.id} className="review-container">
          <p>Name: {review.name}</p>
          <p>Comment: {review.comment}</p>
        </div>
      ))}
    </div>
  );
}
