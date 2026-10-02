import { Link } from "react-router-dom";
import { Logo } from "../components/Img.jsx";
export default function NotFound() {
  return (
    <main className="ip nf">
      <Logo w={96} h={72} />
      <h1 className="t64">404</h1>
      <p className="sub">Sorry, we couldn't find that page.</p>
      <Link className="sbtn" to="/">
        Back to Home
      </Link>
    </main>
  );
}
