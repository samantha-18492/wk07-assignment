import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import "./Home.css";

export function Home() {
  const [destinations, setDestinations] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:8080");
      const data = await response.json();
      setDestinations(data);
    }
    fetchData();
  }, []);

  if (searchParams.get("sortBy") === "asc") {
    destinations.sort((a, b) => (a.city > b.city ? 1 : -1));
  } else if (searchParams.get("sortBy") === "desc") {
    destinations.sort((a, b) => (a.city > b.city ? 1 : -1)).reverse();
  }

  console.log(destinations);

  return (
    <section>
      <p>
        I want to add a button here which allows a user to filter destinations
        by type and duration
      </p>
      <div>
        <label>Sort by: </label>
        <select
          defaultValue=""
          onChange={(event) => setSearchParams({ sortBy: event.target.value })}
        >
          <option value="">---</option>
          <option value="asc">A - Z</option>
          <option value="desc">Z - A</option>
        </select>
      </div>
      {destinations.map((destination) => (
        <Link to={`/destination/${destination.id}`} key={destination.id}>
          <button>
            <img src={destination.image_url} alt={destination.image_alt} />
            <p>
              Destination: {destination.city}, {destination.country}
            </p>
            <p>Type: {destination.type}</p>
            <p>Duration: {destination.duration}</p>
          </button>
        </Link>
      ))}
    </section>
  );
}
