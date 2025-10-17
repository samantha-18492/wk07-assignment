import { Link } from "react-router";
import "./Header.css";

export function Header() {
  return (
    <header>
      <h1>Wanderly</h1>
      <nav>
        <Link to="/" className="link">
          Search
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
      </nav>
    </header>
  );
}
