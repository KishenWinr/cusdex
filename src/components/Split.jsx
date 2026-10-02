// Splits a heading into words that slide up one by one when the section scrolls into view
export const S = ({ children }) =>
  String(children)
    .split(" ")
    .map((w, i) => [
      <span className="sw" key={i}>
        <span style={{ "--d": i * 0.07 + "s" }}>{w}</span>
      </span>,
      " ",
    ]);
