"use client";
// REACT HOOKS
import { createContext, useState } from "react";

///////////////////////////////////////////////////////////////////
// DEFINING WHAT WE EXPORT IN CURRENT CONTEXT
export const ThemeContext = createContext({
  mode: "dark",
  toggle: () => {},
});

export const ThemeProvider = ({ children }) => {
  // STATE VALUE FOR TOGGLING DARK MODE
  const [mode, setMode] = useState("dark");

  // FUNCTION FOR TOGGLING THE DARK MODE
  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // EXPORTING ALL VAUES AND FUNCS FROM CART CONTEXT
  const value = {
    mode,
    toggle,
  };

  return (
    <ThemeContext.Provider value={value}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
