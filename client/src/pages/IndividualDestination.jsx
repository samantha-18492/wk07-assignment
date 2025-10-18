import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router";
import { Form } from "../components/Form";
import "./IndividualDestination.css";

export function IndividualDestination() {
  const [destinationInfo, setDestinationInfo] = useState({});

  const params = useParams();
  const destinationId = params.id;

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:8080/destination/${destinationId}`
      );
      const data = await response.json();
      setDestinationInfo(data);
    }
    fetchData();
  }, [destinationId]);

  return (
    <section>
      {destinationInfo ? (
        <div key={destinationInfo.id}>
          <img
            src={destinationInfo.image_url}
            alt={destinationInfo.image_alt}
          />
          <div>
            <p>
              Destination: {destinationInfo.city}, {destinationInfo.country}
            </p>
            <p>Type: {destinationInfo.type}</p>
            <p>Duration: {destinationInfo.duration}</p>
            <p>{destinationInfo.description}</p>
            <p>Noteworthy landmarks: {destinationInfo.landmarks}</p>
          </div>
          <Form />
          <Link to="/" className="back-button">
            <button>Back</button>
          </Link>
        </div>
      ) : (
        <div>
          <p>No destination was found</p>
          <Link to="/" className="back-button">
            <button>Back</button>
          </Link>
        </div>
      )}
    </section>
  );
}

// do i need to fetch the data again? where id=what?

// server js and postspage.jsx
