import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const C = createContext();
export const useApp = () => useContext(C);
export function Provider({ children }) {
  const path = useLocation().pathname;
  const [pref, setPref] = useState(() => localStorage.getItem("theme")); // null = follow the Figma look of each page
  const theme =
    pref || (path === "/" || path === "/contact" ? "dark" : "light");
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  const toggle = () => {
    const t = theme === "dark" ? "light" : "dark";
    setPref(t);
    localStorage.setItem("theme", t);
  };
  return <C.Provider value={{ theme, toggle }}>{children}</C.Provider>;
}
