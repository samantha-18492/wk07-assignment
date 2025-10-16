import { useEffect, useState } from "react";

export function Home() {
  const [destinations, setDestinations] = useState(null);

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
      <p>Home page content so a list of all destination cards</p>
      {/* fetch and display all destinations
      we'll need useEffect to prevent the request from repeatedly asking the api for the data 
      once we have that data, we need to loop through using .map*/}
    </>
  );
}
