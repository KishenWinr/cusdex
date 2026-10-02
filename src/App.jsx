import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Sun, Moon, ArrowUp } from "lucide-react";
import { useApp } from "./ctx.jsx";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import { Logo } from "./components/Img.jsx";
import Landing from "./pages/Landing.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Insights from "./pages/Insights.jsx";
import Services from "./pages/Services.jsx";
import ServiceDetail from "./pages/ServiceDetail.jsx";
import NotFound from "./pages/NotFound.jsx";
import { Terms, Privacy } from "./pages/Legal.jsx";
const TITLES = {
  "/": "Powering Your Success",
  "/about": "About",
  "/insights": "Insights",
  "/services": "Our Services",
  "/service-detail": "Service Details",
  "/contact": "Contact Us",
  "/terms": "Terms & Conditions",
  "/privacy": "Privacy Policy",
};
const REVEAL =
  "main.land section > *, main.contactpg > *, main.contactpg .ccopy > *, main.ip > *, main.ip .aleft > *, main.ip .iwrap > *, main .scard, main .faqi, main .cv, main .pj, main .pts li, main .wcard, main .icard, main .icd, main .fc, main .step, main .f4 > div, main .frame, main .pvis, main .ri, main .sdi, main .aimg, main .ihero, .mcard [data-rv]";
const VAR = {
  "/": "up",
  "/about": "side",
  "/insights": "sider",
  "/services": "zoom",
  "/service-detail": "up",
  "/contact": "side",
};
const varOf = (p) => VAR[p] || "up";
export default function App() {
  const l = useLocation(),
    nav = useNavigate();
  const { theme, toggle } = useApp();
  const [prog, setProg] = useState(0),
    [top, setTop] = useState(false);
  const [cookie, setCookie] = useState(() => !localStorage.getItem("cookies"));
  const [rk, setRk] = useState(0),
    [tr, setTr] = useState("hold"),
    busy = useRef(false),
    first = useRef(true);
  const ring = useRef(),
    dot = useRef(),
    vref = useRef("/");
  useEffect(() => {
    document.title =
      (TITLES[l.pathname] || "Page not found") + " · Cusdex Global Services";
  }, [l.pathname]);
  useEffect(() => {
    if (l.hash)
      setTimeout(
        () =>
          document
            .querySelector(l.hash)
            ?.scrollIntoView({ behavior: "smooth" }),
        120,
      );
    else window.scrollTo(0, 0);
  }, [l.pathname, l.search, l.hash]);
  useEffect(() => {
    const a = setTimeout(() => setTr("out"), 750),
      b = setTimeout(() => setTr(null), 1700);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
    };
  }, []);
  useEffect(() => {
    // page-transition curtain: intercept internal link clicks
    const h = (e) => {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      )
        return;
      const a = e.target.closest && e.target.closest("a");
      if (!a || a.target === "_blank" || !a.getAttribute("href")) return;
      const u = new URL(a.href, location.href);
      if (u.origin !== location.origin) return;
      if (
        u.pathname === location.pathname &&
        u.search === location.search &&
        u.hash
      )
        return;
      if (
        u.pathname === location.pathname &&
        u.search === location.search &&
        !u.hash &&
        !a.closest(".nav,.mfoot") &&
        false
      )
        return;
      vref.current = u.pathname;
      e.preventDefault();
      if (busy.current) return;
      busy.current = true;
      setTr("in");
      setTimeout(() => {
        if (u.pathname === location.pathname && u.search === location.search)
          setRk((k) => k + 1);
        else nav(u.pathname + u.search + u.hash);
        window.scrollTo(0, 0);
        setTr("out");
        setTimeout(() => {
          setTr(null);
          busy.current = false;
        }, 900);
      }, 840);
    };
    document.addEventListener("click", h, true);
    return () => document.removeEventListener("click", h, true);
  }, [nav]);
  useEffect(() => {
    const f = () => {
      const h = document.documentElement.scrollHeight - innerHeight;
      setProg(h > 0 ? (scrollY / h) * 100 : 0);
      setTop(scrollY > 700);
    };
    addEventListener("scroll", f, { passive: true });
    f();
    return () => removeEventListener("scroll", f);
  }, []);
  useEffect(() => {
    // cursor ring, card spotlight, 3D tilt
    if (matchMedia("(hover:none)").matches) return;
    let x = innerWidth / 2,
      y = innerHeight / 2,
      cx = x,
      cy = y,
      raf,
      tilted = null,
      mag = null;
    const loop = () => {
      cx += (x - cx) * 0.16;
      cy += (y - cy) * 0.16;
      if (ring.current)
        ring.current.style.transform = `translate(${cx}px,${cy}px)`;
      if (dot.current) dot.current.style.transform = `translate(${x}px,${y}px)`;
      raf = requestAnimationFrame(loop);
    };
    loop();
    const mv = (e) => {
      x = e.clientX;
      y = e.clientY;
      const t = e.target.closest ? e.target : null;
      if (!t) return;
      ring.current?.classList.toggle(
        "big",
        !!t.closest("a,button,input,textarea,.scard,.icd,.fc"),
      );
      const s = t.closest(".scard,.pc,.wcard,.pj,.faqi");
      if (s) {
        const r = s.getBoundingClientRect();
        s.style.setProperty("--mx", x - r.left + "px");
        s.style.setProperty("--my", y - r.top + "px");
      }
      const m = t.closest(".pill,.pbtn,.sbtn,.gbtn,.reqbtn,.mgs,.submit");
      if (mag && mag !== m) {
        mag.style.translate = "";
        mag = null;
      }
      if (m) {
        const r = m.getBoundingClientRect();
        m.style.translate = `${(x - r.left - r.width / 2) * 0.28}px ${(y - r.top - r.height / 2) * 0.4}px`;
        mag = m;
      }
      const hs = t.closest(".hero,.contactpg");
      if (hs) {
        const r = hs.getBoundingClientRect();
        hs.style.setProperty("--hx", x - r.left + "px");
        hs.style.setProperty("--hy", y - r.top + "px");
      }
      const k = t.closest(".hvis,.cpan,.cform,.pj,.icard");
      const amp = k && k.matches(".pj,.icard") ? 5 : 9;
      if (tilted && tilted !== k) {
        tilted.style.transition = "transform .6s";
        tilted.style.transform = "";
        tilted = null;
      }
      if (k) {
        const r = k.getBoundingClientRect();
        k.style.transition = "transform .12s";
        k.style.transform = `perspective(1000px) rotateY(${((x - r.left) / r.width - 0.5) * amp}deg) rotateX(${-((y - r.top) / r.height - 0.5) * amp}deg)`;
        tilted = k;
      }
    };
    addEventListener("mousemove", mv, { passive: true });
    return () => {
      removeEventListener("mousemove", mv);
      cancelAnimationFrame(raf);
    };
  }, []);
  useEffect(() => {
    // scroll-reveal animations
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          e.target.classList.toggle("in", e.isIntersecting);
        }),
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );
    const d = first.current ? 950 : 520;
    first.current = false;
    const t = setTimeout(
      () =>
        document.querySelectorAll(REVEAL).forEach((el) => {
          el.classList.add("rv");
          el.style.transitionDelay =
            Math.min([...el.parentNode.children].indexOf(el), 5) * 70 + "ms";
          io.observe(el);
        }),
      d,
    );
    return () => {
      clearTimeout(t);
      io.disconnect();
    };
  }, [l.pathname, l.search, rk]);
  useEffect(() => {
    // parallax "flow" on photos
    let raf = 0;
    const S = ".port,.ri,.aimg,.sdi,.ihero,.g2i>*";
    const run = () => {
      raf = 0;
      document.querySelectorAll(S).forEach((c) => {
        const r = c.getBoundingClientRect();
        if (r.bottom < -100 || r.top > innerHeight + 100) return;
        c.style.setProperty(
          "--py",
          Math.max(
            -34,
            Math.min(34, (r.top + r.height / 2 - innerHeight / 2) * -0.07),
          ) + "px",
        );
      });
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(run);
    };
    addEventListener("scroll", on, { passive: true });
    addEventListener("resize", on);
    const t = setTimeout(on, 1200);
    return () => {
      removeEventListener("scroll", on);
      removeEventListener("resize", on);
      clearTimeout(t);
      cancelAnimationFrame(raf);
    };
  }, [l.pathname]);
  useEffect(() => {
    // click ripple on buttons
    const d = (e) => {
      const b =
        e.target.closest &&
        e.target.closest(".pill,.pbtn,.sbtn,.gbtn,.reqbtn,.mgs,.submit");
      if (!b) return;
      const r = b.getBoundingClientRect(),
        s = document.createElement("span"),
        z = Math.max(r.width, r.height) * 2;
      s.className = "ripple";
      s.style.cssText = `width:${z}px;height:${z}px;left:${e.clientX - r.left - z / 2}px;top:${e.clientY - r.top - z / 2}px`;
      b.appendChild(s);
      setTimeout(() => s.remove(), 700);
    };
    document.addEventListener("pointerdown", d);
    return () => document.removeEventListener("pointerdown", d);
  }, []);
  const ck = (v) => {
    localStorage.setItem("cookies", v);
    setCookie(false);
  };
  return (
    <>
      <div className="prog" style={{ width: prog + "%" }} />
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <div
        className={"page pg-" + varOf(l.pathname)}
        key={l.pathname + l.search + rk}
        id="main"
      >
        <Routes location={l}>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service-detail" element={<ServiceDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
      <div
        className={"tr v-" + varOf(vref.current) + " " + (tr || "")}
        aria-hidden="true"
      >
        <div className="trlogo">
          <Logo w={76} h={76} round />
          <b>Cusdex</b>
        </div>
        {[0, 1, 2, 3, 4].map((i) => (
          <i key={i} className="b" style={{ "--i": i }} />
        ))}
      </div>
      <div className="cur" ref={ring} />
      <div className="curd" ref={dot} />
      <button
        className={"totop" + (top ? " show" : "")}
        onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
      <button
        className="themebtn"
        onClick={toggle}
        aria-label="Toggle dark or bright mode"
        title={
          theme === "dark" ? "Switch to bright mode" : "Switch to dark mode"
        }
      >
        <span key={theme}>
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </span>
      </button>
      {cookie && (
        <div className="cookie" role="dialog" aria-label="Cookie notice">
          <p>
            We use your browser storage for your theme choice. See our{" "}
            <a href="/privacy">Privacy Policy</a>.
          </p>
          <div>
            <button onClick={() => ck("yes")}>Accept</button>
            <button className="g" onClick={() => ck("no")}>
              Decline
            </button>
          </div>
        </div>
      )}
    </>
  );
}
