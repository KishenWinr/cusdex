import { Link } from "react-router-dom";
import { S } from "../components/Split.jsx";
import { useEffect, useState } from "react";
import {
  Users,
  Code2,
  Briefcase,
  ArrowUpRight,
  Target,
  Cpu,
  BarChart2,
  MapPin,
} from "lucide-react";
import Faq from "../components/Faq.jsx";
import Logo3D from "../components/Logo3D.jsx";
import { TICKER } from "../services.js";
import { Img, Logo } from "../components/Img.jsx";
const Lab = ({ n, t }) => (
  <div className="lab">
    <b>{n}</b>
    <i />
    <span>{t}</span>
  </div>
);
const Bars = ({ red }) => (
  <div className={"bars" + (red ? " rb" : "")}>
    <i />
    <i />
    <i />
    <i />
  </div>
);
const spec = [
  [
    Users,
    "Staffing Services",
    "Volume hiring, RPO, executive search, contract, contract-to-hire and full-time placement.",
    "staff",
  ],
  [
    Code2,
    "Software Development",
    "Web, mobile, custom software, UI/UX, full-stack and cloud engineering for growing businesses.",
    "dev",
  ],
  [
    Briefcase,
    "HR Consulting",
    "HR advisory, talent assessment, and training and onboarding for growing teams.",
    "hr",
  ],
];
const why = [
  [
    Target,
    "Customer-First Approach",
    "We place your goals at the heart of every search - designing talent journeys that drive loyalty, satisfaction, and long-term business growth.",
  ],
  [
    Cpu,
    "Technology-Driven Solutions",
    "From AI-assisted matching to cloud-native software, modern technology sits behind everything we deliver.",
  ],
  [
    BarChart2,
    "Measurable Impact",
    "Every engagement is backed by real KPIs and transparent reporting, whether it is a hiring pipeline, a software release or an HR program.",
  ],
];
const steps = [
  [
    "Understand the need",
    "We start with your goal, your constraints and what a successful outcome looks like.",
  ],
  [
    "Plan the delivery",
    "Talent, technology or HR support is shaped around a clear scope, timeline and budget.",
  ],
  [
    "Deliver and support",
    "We execute with transparent reporting and stay on after launch, joining or handover.",
  ],
];
function Count({ to }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    let s, raf;
    const step = (t) => {
      s = s ?? t;
      const p = Math.min((t - s) / 1700, 1);
      setV(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    const id = setTimeout(() => {
      raf = requestAnimationFrame(step);
    }, 1300);
    return () => {
      clearTimeout(id);
      cancelAnimationFrame(raf);
    };
  }, [to]);
  return v;
}
export default function Landing() {
  return (
    <main className="land">
      <section className="hero" id="home">
        <div className="hcopy">
          <Lab n="00" t="Staffing, software and HR consulting" />
          <h1>
            {[
              ["Powering", ""],
              ["Your", ""],
              ["Success.", "red"],
            ].map(([t, c], i) => [
              <span className="w" key={t}>
                <span
                  className={c}
                  style={{ animationDelay: 0.6 + i * 0.13 + "s" }}
                >
                  {t}
                </span>
              </span>,
              " ",
            ])}
          </h1>
          <p className="hp">
            Staffing, software development and HR consulting - one partner for
            the talent, technology and guidance your business needs.
          </p>
          <div className="hbtn">
            <Link className="pill red lg" to="/contact">
              Get Started →
            </Link>
            <Link className="pill out lg" to="/contact">
              Explore Opportunities
            </Link>
          </div>
          <div className="stats">
            {[
              ["2026", "Founded"],
              ["50-100", "Employees"],
              ["15", "Specialties"],
            ].map(([a, b], i) => (
              <div key={b} className="st">
                {i > 0 && <u />}
                <div>
                  <b>{i === 1 ? a : <Count to={+a} />}</b>
                  <small>{b}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hvis v3">
          <Logo3D />
        </div>
      </section>
      <div className="trust">
        <small>
          Staffing, software and HR consulting, delivered with trust
        </small>
        <div className="tflow">
          <div className="tt">
            {[0, 1].map((k) => (
              <div className="tset" key={k}>
                {TICKER.map((r) => (
                  <span key={r}>
                    <i />
                    {r}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <section className="cream ov" id="overview">
        <div className="rowb">
          <Lab n="01" t="Who We Are" />
          <h2 className="h64 r">
            <S>The right people change what's possible.</S>
          </h2>
        </div>
        <div className="ovb">
          <div className="frame w460">
            <Img n="who" alt="Team conversation" />
          </div>
          <div className="ovc">
            <p className="p22">
              Cusdex Global is a Hyderabad-based company delivering staffing,
              software development and HR consulting for businesses across
              industries.
            </p>
            <hr />
            <p className="p16">
              We started by connecting people with work, because a job matters
              in a person's life. That same care now shapes how we build
              software and advise on HR: listen first, plan clearly, deliver
              reliably.
            </p>
            <p className="p16">
              One team for hiring, engineering and HR consulting means fewer
              handoffs, faster decisions and a partner that grows with you.
            </p>
            <div className="between">
              <b className="built">Built around fit, clarity and delivery</b>
              <Bars red />
            </div>
          </div>
        </div>
      </section>
      <section className="dark sv" id="specialty">
        <div className="between end">
          <div className="w760">
            <Lab n="02" t="Specialties" />
            <h2 className="h64">
              <S>Three ways we help you build.</S>
            </h2>
          </div>
          <div className="w360">
            <p className="p16 m">
              Whether you need people, a product or expert HR guidance, every
              engagement starts by understanding the brief behind the brief.
            </p>
            <Link className="pill out" to="/contact">
              Discuss your need
            </Link>
          </div>
        </div>
        <div className="cards3" id="services">
          {spec.map(([I, t, d, g], i) => (
            <Link to={"/services#" + g} className="scard" key={t}>
              <div className="between mid">
                <b className="n">0{i + 1}</b>
                <span className="ic">
                  <I size={20} />
                </span>
              </div>
              <div className="sb">
                <h3>{t}</h3>
                <p>{d}</p>
                <hr className="d" />
                <div className="between mid">
                  <b className="ex">Explore service</b>
                  <ArrowUpRight size={16} color="#d71920" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="cream wy" id="why">
        <div className="between end">
          <div className="w680">
            <Lab n="03" t="Delivering excellence" />
            <h2 className="h56">
              <S>Why Choose Cusdex Global?</S>
            </h2>
          </div>
          <p className="p16 m w340">
            We deliver measurable results through skilled people, modern
            technology and practical HR guidance.
          </p>
        </div>
        <div className="cards3 g24">
          {why.map(([I, t, d]) => (
            <div className="wcard" key={t}>
              <span className="wic">
                <I size={24} color="#d71920" />
              </span>
              <h4>{t}</h4>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="facts" id="facts">
        <div className="between end">
          <div className="w650">
            <small>Company facts</small>
            <h2>
              <S>A focused team, built for what you are building.</S>
            </h2>
          </div>
          <Bars />
        </div>
        <div className="f4">
          {[
            ["Focus", "Staffing, Software, HR"],
            ["Company size", "50-100 employees"],
            ["Services", "15 across three specialties"],
            ["Founded", "2026"],
          ].map(([a, b]) => (
            <div key={a}>
              <small>{a}</small>
              <p>{b}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="dark pr" id="how">
        <div className="pvis">
          <Img n="how" alt="Interview" />
        </div>
        <div className="ppan">
          <Lab n="04" t="How we work" />
          <h2 className="h42">
            <S>Delivery, without the unnecessary noise.</S>
          </h2>
          <p className="p16 m">
            A focused process that keeps people and context visible, from the
            first brief to the final delivery.
          </p>
          <div>
            {steps.map(([t, d], i) => (
              <div className="step" key={t}>
                <b>0{i + 1}</b>
                <div>
                  <h5>{t}</h5>
                  <p>{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="dark pw" id="pathways">
        <div className="between end">
          <div className="w680">
            <Lab n="05" t="Two paths, one team" />
            <h2 className="h44">
              <S>Move the right conversation forward.</S>
            </h2>
          </div>
          <p className="p14 w330">
            Whether you are building a business or building a career, Cusdex
            Global connects you with the right next step.
          </p>
        </div>
        <div className="g2">
          <div className="pc cr">
            <div className="between mid">
              <b className="lab2 dr">For businesses</b>
              <span className="arr blk">
                <ArrowUpRight size={22} color="#f2efe8" />
              </span>
            </div>
            <div>
              <h3>Hire it, build it, get it delivered.</h3>
              <p>
                Share your hiring, software or HR need and we will shape a plan
                around it.
              </p>
              <Link className="pill red" to="/contact">
                Talk to us
              </Link>
            </div>
          </div>
          <div className="pc dk">
            <div className="between mid">
              <b className="lab2 red">For job seekers</b>
              <span className="arr rd">
                <ArrowUpRight size={22} color="#f2efe8" />
              </span>
            </div>
            <div>
              <h3>Find work that fits where you're going.</h3>
              <p className="mu">
                Start a conversation about your experience, direction and the
                opportunities that could be relevant.
              </p>
              <Link className="pill out" to="/contact">
                Explore opportunities
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="cream ind" id="industries">
        <div className="between end">
          <div className="w560">
            <Lab n="06" t="Industries We Serve" />
            <h2 className="h52">
              <S>Cross-Industry Expertise</S>
            </h2>
          </div>
          <p className="p16 m w380">
            From technology and retail to healthcare and finance - we bring
            domain knowledge to every engagement.
          </p>
        </div>
        <div className="g4">
          {[
            [
              "Technology",
              "Engineering talent and software delivery for growth companies.",
              "tech",
              0,
            ],
            [
              "Retail & E-commerce",
              "Teams and digital products for retail and online businesses.",
              "retail",
              1,
            ],
            [
              "Healthcare",
              "Clinical and support staffing with dependable compliance.",
              "fin",
              0,
            ],
            [
              "Financial Services",
              "Talent and digital products for banking and fintech.",
              "cx",
              1,
            ],
          ].map(([t, d, im, top]) => (
            <div className={"icard" + (top ? " tf" : "")} key={t}>
              {!top && <Img n={im} alt={t} />}
              <div className="it">
                <h4>{t}</h4>
                <p>{d}</p>
              </div>
              {!!top && <Img n={im} alt={t} />}
            </div>
          ))}
        </div>
      </section>
      <div className="mq" aria-hidden="true">
        <div className="mqt">
          {[0, 1].map((k) => (
            <span key={k}>
              Staffing <i>✦</i> Software <i>✦</i> HR Consulting <i>✦</i>{" "}
              Hyderabad <i>✦</i>{" "}
            </span>
          ))}
        </div>
      </div>
      <section className="dark cta" id="contact-cta">
        <div className="cpan">
          <div className="cc">
            <div className="between mid">
              <small className="red">Start a conversation</small>
              <Bars red />
            </div>
            <div>
              <h2 className="h64 n">
                <S>Let's find the right fit - together.</S>
              </h2>
              <p className="p17">
                Tell us what you are building, hiring for, or planning next.
                Cusdex Global is ready to listen.
              </p>
            </div>
            <div className="vis">
              <a
                className="pill red"
                href="https://www.cusdexglobal.com"
                target="_blank"
                rel="noreferrer"
              >
                Visit cusdexglobal.com
              </a>
              <b>www.cusdexglobal.com</b>
            </div>
          </div>
          <div className="cm">
            <Logo w={280} h={210} />
            <div className="loc">
              <MapPin size={14} color="#d71920" />
              <p>Somajiguda, Hyderabad - 500082</p>
            </div>
          </div>
        </div>
      </section>
      <Faq />
    </main>
  );
}
