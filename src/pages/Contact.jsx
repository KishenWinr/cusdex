import { useState } from "react";
import { Mail, Globe, MapPin, Check } from "lucide-react";
import { site } from "../site.js";
export default function Contact() {
  const [f, setF] = useState({ name: "", email: "", subject: "", message: "" });
  const [st, setSt] = useState("idle");
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const send = async (e) => {
    e.preventDefault();
    setSt("sending");
    const l = JSON.parse(localStorage.getItem("messages") || "[]");
    localStorage.setItem(
      "messages",
      JSON.stringify([...l, { ...f, at: Date.now() }]),
    );
    const ep = import.meta.env.VITE_FORM_ENDPOINT; // e.g. a Formspree URL; without it the visitor's mail app opens with the message filled in
    try {
      if (ep)
        await fetch(ep, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(f),
        });
      else
        window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(f.subject)}&body=${encodeURIComponent(`Name: ${f.name}\nEmail: ${f.email}\n\n${f.message}`)}`;
    } catch {}
    setTimeout(() => setSt("done"), 800);
  };
  return (
    <main className="land contactpg">
      <div className="blob a" />
      <div className="blob b" />
      <div className="ccopy">
        <div className="lab">
          <b>00</b>
          <i />
          <span>Contact us</span>
        </div>
        <h1>
          Let's start the <span className="red">conversation.</span>
        </h1>
        <p className="hp">
          Tell us what you are building, hiring for, or looking to do next.
          Cusdex Global is ready to listen.
        </p>
        <div className="cinfo">
          <a href={"mailto:" + site.email}>
            <Mail size={18} />
            {site.email}
          </a>
          <a href={"https://" + site.website} target="_blank" rel="noreferrer">
            <Globe size={18} />
            {site.website}
          </a>
          <span>
            <MapPin size={18} />
            {site.address}
          </span>
        </div>
      </div>
      {st === "done" ? (
        <div className="cform done">
          <span className="tick">
            <Check size={34} />
          </span>
          <h3>Message sent</h3>
          <p className="mu">
            Thank you, {f.name.split(" ")[0] || "friend"}. We'll get back to you
            soon.
          </p>
          <button
            className="pill out"
            onClick={() => {
              setF({ name: "", email: "", subject: "", message: "" });
              setSt("idle");
            }}
          >
            Send another message
          </button>
        </div>
      ) : (
        <form className="cform" onSubmit={send}>
          <h3>Send us a message</h3>
          <label>
            Name
            <input
              placeholder="Your full name"
              value={f.name}
              onChange={set("name")}
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              placeholder="you@example.com"
              value={f.email}
              onChange={set("email")}
              required
            />
          </label>
          <label>
            Subject
            <input
              placeholder="How can we help?"
              value={f.subject}
              onChange={set("subject")}
              required
            />
          </label>
          <label>
            Message
            <textarea
              rows={5}
              placeholder="Write your message..."
              value={f.message}
              onChange={set("message")}
              required
              minLength={10}
            />
          </label>
          <button className="pill red lg full" disabled={st === "sending"}>
            {st === "sending" ? "Sending…" : "Send message"}
          </button>
        </form>
      )}
    </main>
  );
}
