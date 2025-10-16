import { Link } from "react-router";

export function Header() {
  return (
    <header>
      <p>App title</p>
      <Link to="/">Search</Link> | <Link to="/about">About</Link>
    </header>
  );
}
