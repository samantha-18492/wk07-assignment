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
        <div
          key={destinationInfo.id}
          className="individual-destination-container"
        >
          <div className="destination-top">
            <img
              src={destinationInfo.image_url}
              alt={destinationInfo.image_alt}
              className="destination-image"
            />
            <div className="destination-info">
              <p className="destination-info-text">
                Destination: {destinationInfo.city}, {destinationInfo.country}
              </p>
              <p className="destination-info-text">
                Type: {destinationInfo.type}
              </p>
              <p className="destination-info-text">
                Duration: {destinationInfo.duration}
              </p>
              <p className="destination-info-text">
                {destinationInfo.description}
              </p>
              <p className="destination-info-text">
                Noteworthy landmarks: {destinationInfo.landmarks}
              </p>
            </div>
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
