"use client";
// REACT HOOKS
import { useContext } from "react";
// STYLES
import styles from "./dark-mode-toggle.module.css";
// IMPORTING THEME CONTEXT API
import { ThemeContext } from "@/context/ThemeContext";

const DarkModeToggle = () => {
  // DESTRUCTURING VALUES AND FUNCS FROM THEME CONTEXT API
  const { mode, toggle } = useContext(ThemeContext);

  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { light: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkModeToggle;
