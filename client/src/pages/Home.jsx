import { useEffect, useState } from "react";

export function Home() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:8080");
      const data = await response.json();
      setDestinations(data);
    }
    fetchData();
  }, []);

  console.log(destinations);

  return (
    <>
      <p>
        I want to add a button here which allows a user to filter destinations
        by type and duration
      </p>
      {destinations.map((destination) => (
        <button key={destination.id}>
          <img src={destination.image_url} alt={destination.image_alt} />
          <p>
            Destination: {destination.city}, {destination.country}
          </p>
          <p>Type: {destination.type}</p>
          <p>Duration: {destination.duration}</p>
        </button>
      ))}
    </>
  );
}
