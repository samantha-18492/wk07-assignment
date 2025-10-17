import { useState } from "react";
import { useParams, useSearchParams } from "react-router";
import { DestinationReview } from "./DestinationReview";

export function Form() {
  const [formValues, setFormValues] = useState({});
  const [formData, setFormData] = useState({});
  const params = useParams();
  const destinationId = params.id;

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`Target ${e.target.destinationId.value}`);
    setFormData({ ...formData, destinationId: e.target.destinationId.value });
  }

  function handleChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="destinationId" type="hidden" value={destinationId} />
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={handleChange} />
        <label htmlFor="comment">Comment</label>
        <input
          type="text"
          id="comment"
          name="comment"
          onChange={handleChange}
        />
        <button type="submit"> Submit review</button>
        {console.log(formValues)}
      </form>
      <DestinationReview />
    </div>
  );
}
