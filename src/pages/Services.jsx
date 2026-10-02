import { Link } from "react-router-dom";
import { S } from "../components/Split.jsx";
import { ArrowUpRight } from "lucide-react";
import { SERVICES, GROUPS } from "../services.js";
const Chev = ({ g, k }) => (
  <div className={"chev " + k}>
    {SERVICES.filter((x) => x.g === g).map((x, i) => (
      <Link
        to={"/service-detail?s=" + x.slug}
        className={"cv " + (i % 2 ? "dn" : "up")}
        key={x.slug}
        style={{ "--k": i }}
      >
        <span className="cvh">
          <span className="cvb">
            <x.I size={24} />
            <b>0{i + 1}</b>
          </span>
          <i className="cvd" />
          <i className="cvl" />
        </span>
        <div className="cvt">
          <h4>{x.t}</h4>
          <p>{x.short}</p>
        </div>
      </Link>
    ))}
  </div>
);
export default function Services() {
  return (
    <main className="ip svc">
      <section className="shero">
        <div className="ov2" />
        <div className="sh">
          <h1>Our Services</h1>
          <p>
            Staffing, software development and HR consulting - delivered by one
            accountable team.
          </p>
          <Link className="sbtn" to="/contact">
            Get Started
          </Link>
        </div>
      </section>
      <section id="staff" className="grp">
        <h2 className="h48 ctr">
          <S>Staffing Services</S>
        </h2>
        <p className="gsub">
          Six ways to bring the right people into your business.
        </p>
        <Chev g="staff" k="s6" />
      </section>
      <section id="dev" className="grp">
        <h2 className="h48 ctr">
          <S>Development Services</S>
        </h2>
        <p className="gsub">Modern software, built to scale with you.</p>
        <Chev g="dev" k="s6" />
      </section>
      <section id="hr" className="grp">
        <h2 className="h48 ctr">
          <S>HR Consulting</S>
        </h2>
        <p className="gsub">
          Practical people support, from assessment to onboarding.
        </p>
        <div className="pjg">
          {SERVICES.filter((x) => x.g === "hr").map((x) => (
            <Link
              to={"/service-detail?s=" + x.slug}
              className="pj"
              key={x.slug}
              style={{ "--k": x.slug.length }}
            >
              <span className="pji">
                <x.I size={28} />
              </span>
              <div>
                <h4>{x.t}</h4>
                <p>{x.d}</p>
              </div>
              <ArrowUpRight size={22} color="#d71920" />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
