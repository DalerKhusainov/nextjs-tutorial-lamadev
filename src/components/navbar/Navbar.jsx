// REACT HOOKS
import React from "react";
// NEXTJS HOOKS
import Link from "next/link";
// STYLES
import styles from "./navbar.module.css";
// COMPONENTS
import DarkModeToggle from "../dark-mode-toggle/DarkModeToggle";

// DATA
const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Link href="/" className={styles.logo}>
        lamamia
      </Link>
      <div className={styles.linksAndButton}>
        <DarkModeToggle />
        <ul className={styles.linksList}>
          {links.map((link) => (
            <li key={link.id} className={styles.linkItem}>
              <Link href={link.url} className={styles.link}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <button className={styles.logoutButton}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
