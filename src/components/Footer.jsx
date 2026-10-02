import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Facebook,
  Linkedin,
  Youtube,
  Instagram,
  Mail,
  Phone,
  Globe,
  MapPin,
} from "lucide-react";
import { site } from "../site.js";
import { Logo } from "./Img.jsx";
import { SERVICES } from "../services.js";
// Giant edge-to-edge "Cusdex" wordmark: SVG textLength makes it span the full width at any zoom or screen size.
function Wordmark() {
  const ref = useRef(),
    [rm] = useState(
      () =>
        typeof matchMedia !== "undefined" &&
        matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.classList.add("on");
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => el.classList.toggle("on", e.isIntersecting),
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div className="fwm" ref={ref} aria-hidden="true">
      <svg
        viewBox="0 0 1000 215"
        preserveAspectRatio="xMidYMax meet"
        focusable="false"
      >
        <defs>
          <linearGradient
            id="fwg"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="60"
            x2="0"
            y2="215"
          >
            <stop offset="0" stopColor="#ff6a6e" />
            <stop offset=".5" stopColor="#d71920" stopOpacity=".92" />
            <stop offset="1" stopColor="#7a0f15" stopOpacity=".16" />
          </linearGradient>
          <linearGradient
            id="fws"
            gradientUnits="userSpaceOnUse"
            x1="-400"
            y1="0"
            x2="0"
            y2="0"
          >
            <stop offset="0" stopColor="#fff" stopOpacity="0" />
            <stop offset=".5" stopColor="#fff" stopOpacity=".42" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
            {!rm && (
              <>
                <animate
                  attributeName="x1"
                  values="-400;1400"
                  dur="6s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="x2"
                  values="0;1800"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </>
            )}
          </linearGradient>
        </defs>
        <text
          x="-8"
          y="268"
          textLength="1012"
          lengthAdjust="spacingAndGlyphs"
          fill="url(#fwg)"
        >
          Cusdex
        </text>
        <text
          className="sh"
          x="-8"
          y="268"
          textLength="1012"
          lengthAdjust="spacingAndGlyphs"
          fill="url(#fws)"
        >
          Cusdex
        </text>
      </svg>
    </div>
  );
}
export default function Footer() {
  const p = useLocation().pathname;
  const land = p === "/" || p === "/contact";
  return (
    <footer className={"mfoot " + (land ? "l" : "i")}>
      <div
        className="mcard"
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          e.currentTarget.style.setProperty("--fx", e.clientX - r.left + "px");
          e.currentTarget.style.setProperty("--fy", e.clientY - r.top + "px");
        }}
      >
        <div className="spot" />
        <div className="mwrap">
          <div className="mtop" data-rv>
            <div className="mbrand">
              <Link to="/" className="brand">
                <Logo w={44} h={44} round />
                <span className="cname" style={{ color: "#f2efe8" }}>
                  Cusdex
                </span>
              </Link>
              <p className="mtag">
                Staffing, software development and HR consulting, delivered by
                one team in Hyderabad.
              </p>
              <div className="msoc">
                {[
                  [Facebook, "Facebook"],
                  [Linkedin, "LinkedIn"],
                  [Youtube, "YouTube"],
                  [Instagram, "Instagram"],
                ].map(([I, n]) => (
                  <a
                    key={n}
                    href="#"
                    aria-label={n}
                    onClick={(e) => e.preventDefault()}
                  >
                    <I size={18} />
                  </a>
                ))}
              </div>
            </div>
            <div className="mcont">
              <h6>Contact</h6>
              <a href={"mailto:" + site.email}>
                <Mail size={15} />
                {site.email}
              </a>
              {site.phone && (
                <a href={"tel:" + site.phone.replace(/\s/g, "")}>
                  <Phone size={15} />
                  {site.phone}
                </a>
              )}
              <a
                href={"https://" + site.website}
                target="_blank"
                rel="noreferrer"
              >
                <Globe size={15} />
                {site.website}
              </a>
              <span>
                <MapPin size={15} />
                {site.address}
              </span>
            </div>
            <div className="mcol">
              <h6>Pages</h6>
              <Link to="/">Home</Link>
              <Link to="/insights">Insights</Link>
              <Link to="/services">Services</Link>
              <Link to="/service-detail">Service Details</Link>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
            <div className="mcol">
              <h6>Staffing</h6>
              {SERVICES.filter((x) => x.g === "staff").map((x) => (
                <Link key={x.slug} to={"/service-detail?s=" + x.slug}>
                  {x.t}
                </Link>
              ))}
            </div>
            <div className="mcol">
              <h6>Development</h6>
              {SERVICES.filter((x) => x.g === "dev").map((x) => (
                <Link key={x.slug} to={"/service-detail?s=" + x.slug}>
                  {x.t}
                </Link>
              ))}
            </div>
            <div className="mcol">
              <h6>HR Consulting</h6>
              {SERVICES.filter((x) => x.g === "hr").map((x) => (
                <Link key={x.slug} to={"/service-detail?s=" + x.slug}>
                  {x.t}
                </Link>
              ))}
            </div>
          </div>
          <div className="mline" data-rv>
            <i />
          </div>
          <div className="mbot" data-rv>
            <span>© 2026 Cusdex. All rights reserved.</span>
            <div className="mlegal">
              <Link to="/terms">Terms &amp; Conditions</Link>
              <Link to="/privacy">Privacy Policy</Link>
            </div>
          </div>
        </div>
        <Wordmark />
      </div>
    </footer>
  );
}
