import { useEffect, useState } from "react";
import { useParams } from "react-router";

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
      {
        console.log(`Here is my: ${data}`);
      }
      setReviews(data.reviews);
    }
    fetchData();
  }, [destinationId]);

  return (
    <div>
      <h2>Reviews:</h2>
      {reviews.map((review) => (
        <div key={review.id}>
          <p>Name: {review.name}</p>
          <p>Comment: {review.comment}</p>
        </div>
      ))}
    </div>
  );
}
