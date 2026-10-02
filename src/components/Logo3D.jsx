// Pure CSS 3D logo: stacked slices give real depth, the whole stack swings in 3D, rings orbit around it.
const N = 14;
export default function Logo3D() {
  return (
    <div className="l3d" aria-label="Cusdex 3D logo" role="img">
      <div className="l3glow" />
      <div className="l3ring r1">
        <i />
      </div>
      <div className="l3ring r2">
        <i />
      </div>
      <div className="l3stage">
        <div className="l3spin">
          {Array.from({ length: N }, (_, i) => (
            <svg
              key={i}
              className="l3s"
              viewBox="0 0 64 64"
              style={{
                "--z": (i - N / 2) * 5 + "px",
                "--b": 0.28 + (0.72 * i) / (N - 1),
              }}
            >
              <defs>
                <linearGradient id={"g" + i} x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#8f1018" />
                  <stop offset="1" stopColor="#ff2a2f" />
                </linearGradient>
              </defs>
              <circle cx="32" cy="32" r="29" fill={"url(#g" + i + ")"} />
              <circle cx="32" cy="38" r="18" fill="#fff" />
              <circle cx="32" cy="43" r="12" fill={"url(#g" + i + ")"} />
              <circle cx="32" cy="51" r="5" fill="#fff" />
            </svg>
          ))}
          <span className="l3shine" />
        </div>
        <div className="l3shadow" />
      </div>
      <div className="l3cap">
        <small className="red">Cusdex Global</small>
        <p>Talent, technology and delivery under one roof.</p>
      </div>
    </div>
  );
}
