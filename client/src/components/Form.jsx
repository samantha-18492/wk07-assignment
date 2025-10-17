import { useState } from "react";
import { DestinationReview } from "./DestinationReview";

export function Form() {
  const [formValues, setFormValues] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={handleChange} />
        <label htmlFor="comment">Comment</label>
        <input
          type="text"
          id="comment"
          name="comment"
          onChange={handleChange}
        />
        {console.log(formValues)}
      </form>
      <DestinationReview />
    </div>
  );
}
