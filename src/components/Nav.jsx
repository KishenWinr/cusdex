import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Logo } from "./Img.jsx";
export default function Nav() {
  const p = useLocation().pathname;
  const [open, setOpen] = useState(false),
    [hide, setHide] = useState(false),
    [sc, setSc] = useState(false);
  useEffect(() => {
    let last = window.scrollY;
    const f = () => {
      const y = window.scrollY;
      setSc(y > 10);
      if (y > 120 && y > last + 4) setHide(true);
      else if (y < last - 4 || y <= 120) setHide(false);
      last = y;
    };
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  useEffect(() => {
    setHide(false);
    setOpen(false);
  }, [p]);
  const L = [
    ["/", "Home"],
    ["/about", "About"],
    ["/insights", "Insights"],
    ["/services", "Services"],
    ["/service-detail", "Service Details"],
  ];
  return (
    <header
      className={
        "nav innernav" +
        (hide && !open ? " hide" : "") +
        (sc ? " scrolled" : "")
      }
    >
      <Link to="/" className="brand" aria-label="Cusdex home">
        <Logo w={40} h={40} round />
        <span className="cname">Cusdex</span>
      </Link>
      <button
        className="burger"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
        aria-expanded={open}
      >
        {open ? "✕" : "☰"}
      </button>
      <nav className={open ? "links open" : "links"}>
        {L.map(([to, t]) => (
          <Link key={t} to={to} className={p === to ? "act" : ""}>
            {t}
          </Link>
        ))}
        <Link className="pbtn" to="/contact">
          Contact Us
        </Link>
      </nav>
    </header>
  );
}
