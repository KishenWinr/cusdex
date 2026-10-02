import { useState } from "react";
import { IMAGES } from "../images.js";
export const Img = ({ n, alt = "", className = "" }) => {
  const [bad, setBad] = useState(false);
  return bad ? (
    <div className={"ph " + className} role="img" aria-label={alt} />
  ) : (
    <img
      className={className}
      src={IMAGES[n] || `/images/${n}.jpg`}
      alt={alt}
      loading="lazy"
      onError={() => setBad(true)}
    />
  );
};
export const Logo = ({ w = 64, h = 48, round }) => {
  const [bad, setBad] = useState(false);
  return bad ? (
    <svg width={h} height={h} viewBox="0 0 64 64">
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8f1018" />
          <stop offset="1" stopColor="#ff2a2f" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="29" fill="url(#lg)" />
      <circle cx="32" cy="38" r="18" fill="#fff" />
      <circle cx="32" cy="43" r="12" fill="url(#lg)" />
      <circle cx="32" cy="51" r="5" fill="#fff" />
    </svg>
  ) : (
    <img
      src={IMAGES.logo || "/images/logo.png"}
      alt="Cusdex"
      style={{
        width: w,
        height: h,
        objectFit: "cover",
        borderRadius: round ? "50%" : 0,
      }}
      onError={() => setBad(true)}
    />
  );
};
