import { Link } from "react-router-dom";
import { Img } from "../components/Img.jsx";
const F = [
  ["Focus", "Staffing, Software, HR Consulting"],
  ["Company size", "50-100 employees"],
  ["Founded", "2026"],
  ["Based in", "Hyderabad, India"],
];
export default function About() {
  return (
    <main className="ip about">
      <div className="aleft">
        <h1 className="t64">About Cusdex</h1>
        <p className="sub">Who We Are</p>
        <p className="b20">
          Cusdex Global is a Hyderabad-based company delivering staffing,
          software development and HR consulting for businesses across
          industries. We began by connecting people with the right work, and
          grew into a partner that also builds the products and advises on the
          people processes our clients depend on.
        </p>
        <p className="b20">
          Staffing services include volume hiring, RPO, executive hiring,
          contract, contract-to-hire and full-time roles. Development services
          cover web, mobile, custom software, UI/UX, full-stack and cloud. Our
          HR consulting team supports advisory, talent assessment, and training
          and onboarding.
        </p>
        <div className="afacts">
          {F.map(([a, b]) => (
            <div key={a}>
              <small>{a}</small>
              <p>{b}</p>
            </div>
          ))}
        </div>
        <div>
          <Link className="sbtn" to="/contact">
            Get in touch
          </Link>
        </div>
      </div>
      <div className="aimg">
        <Img n="about" alt="Cusdex team member" />
      </div>
    </main>
  );
}
