import { useEffect, useState } from "react";
import { useParams } from "react-router";

export function IndividualDestination() {
  const [destinationInfo, setDestinationInfo] = useState({});

  const params = useParams();
  const destinationId = params.id;
  console.log(destinationInfo);

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
    <div>
      {destinationInfo ? (
        <div>
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
        </div>
      ) : (
        <p>No destination was found</p>
      )}
    </div>
  );
}

// do i need to fetch the data again? where id=what?

// server js and postspage.jsx
