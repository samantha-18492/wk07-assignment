import { useState } from "react";
import { useParams } from "react-router";
import { DestinationReview } from "./DestinationReview";
import "./Form.css";

export function Form() {
  const params = useParams();
  const destinationId = params.id;

  const [formValues, setFormValues] = useState({
    destinationId: destinationId,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(`Destination Id: ${destinationId}`);

    await fetch(`http://localhost:8080/destination/${destinationId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formValues),
    });
  }

  function handleChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  return (
    <section>
      <DestinationReview />
      <div className="form-container">
        <h3>Write a review</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="e.g.Sam"
              onChange={handleChange}
            />
          </div>
          <div className="form-input-field">
            <label htmlFor="comment">Review </label>
            <textarea
              id="comment"
              name="comment"
              placeholder="Tell others what you thought"
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="submit-button">
            {" "}
            Submit
          </button>
          {console.log(formValues)}
        </form>
      </div>
    </section>
  );
}
