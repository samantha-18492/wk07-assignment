import { Link } from "react-router";

export function NotFound() {
  return (
    <>
      <p>Page not found</p>
      <Link to="/" className="back">
        Back
      </Link>
    </>
  );
}
