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
        `https://wk07-assignment-server-rryl.onrender.com/destination/${destinationId}`
      );
      const data = await response.json();
      setReviews(data.reviews);
    }
    fetchData();
  }, [destinationId]);

  return (
    <div className="review-container">
      <h3>Destination reviews</h3>
      {reviews.map((review) => (
        <div key={review.id} className="individual-review">
          <p className="review-comment">"{review.comment}"</p>
          <p className="review-name">{review.name}</p>
        </div>
      ))}
    </div>
  );
}
