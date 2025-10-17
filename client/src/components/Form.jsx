import { useState } from "react";
import { useParams } from "react-router";
import { DestinationReview } from "./DestinationReview";

export function Form() {
  const [formValues, setFormValues] = useState({});
  const params = useParams();
  const destinationId = params.id;

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(`Destination Id: ${destinationId}`);

    await fetch(`/destination/${destinationId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formValues, destinationId }),
    });
  }

  function handleChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="destinationId" type="hidden" value={destinationId} />
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="e.g.Sam"
          onChange={handleChange}
        />
        <label htmlFor="comment">Comment</label>
        <input
          type="text"
          id="comment"
          name="comment"
          placeholder="Tell others what you thought"
          onChange={handleChange}
        />
        <button type="submit"> Submit review</button>
        {console.log(formValues)}
      </form>
      <DestinationReview />
    </div>
  );
}
