import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { S } from "./Split.jsx";
import { FAQS } from "../faqs.js";
// Only one answer is open at a time: opening one closes the previous. Click the open one to close it.
export default function Faq() {
  const [open, setOpen] = useState(-1); // -1 = every question starts closed
  return (
    <section className="dark faq" id="faq">
      <div className="blob a" />
      <div className="blob b" />
      <div className="faqL">
        <div className="lab">
          <b>07</b>
          <i />
          <span>FAQs</span>
        </div>
        <h2 className="h56">
          <S>Quick answers before you begin.</S>
        </h2>
        <p className="p16 m">
          Staffing, software or HR - the questions we hear most. Cannot find
          yours? Ask us directly.
        </p>
        <Link className="pill red" to="/contact">
          Ask a question
        </Link>
      </div>
      <div className="faqR">
        {FAQS.map((f, i) => {
          const on = open === i;
          return (
            <div className={"faqi" + (on ? " on" : "")} key={f.q}>
              <button
                className="faqq"
                id={"fq" + i}
                aria-expanded={on}
                aria-controls={"fa" + i}
                onClick={() => setOpen(on ? -1 : i)}
              >
                <b className="faqn">{String(i + 1).padStart(2, "0")}</b>
                <span>{f.q}</span>
                <i className="faqp">
                  <Plus size={20} />
                </i>
              </button>
              <div
                className="faqa"
                id={"fa" + i}
                role="region"
                aria-labelledby={"fq" + i}
              >
                <div>
                  <p>{f.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
