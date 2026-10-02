import { Link, useSearchParams } from "react-router-dom";
import { S } from "../components/Split.jsx";
import { ArrowRight, Check } from "lucide-react";
import { SERVICES, GROUPS, bySlug } from "../services.js";
export default function ServiceDetail() {
  const [q] = useSearchParams();
  const s = bySlug(q.get("s"));
  const rel = SERVICES.filter((x) => x.g === s.g && x.slug !== s.slug)
    .concat(SERVICES.filter((x) => x.g !== s.g))
    .slice(0, 6);
  return (
    <main className="ip sd" key={s.slug}>
      <div className="sdt">
        <div className="sdi sdvis">
          <s.I size={120} strokeWidth={1.2} />
          <i className="o1" />
          <i className="o2" />
        </div>
        <div className="sdc">
          <h1 className="t48">{s.t}</h1>
          <p className="d24">{s.short}</p>
          <h3 className="m24">{GROUPS[s.g]}</h3>
          <p className="d20">{s.d}</p>
          <ul className="pts">
            {s.pts.map((p) => (
              <li key={p}>
                <Check size={18} color="#d71920" />
                {p}
              </li>
            ))}
          </ul>
          <Link className="reqbtn" to="/contact">
            Request a Consultation
          </Link>
        </div>
      </div>
      <h2 className="h32">
        <S>Related Services</S>
      </h2>
      <div className="g3i">
        {rel.map((x) => (
          <Link to={"/service-detail?s=" + x.slug} className="icd" key={x.slug}>
            <span className="icv">
              <x.I size={26} />
            </span>
            <h4>{x.t}</h4>
            <p>{x.short}</p>
            <span className="lm">
              Learn More <ArrowRight size={16} />
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
