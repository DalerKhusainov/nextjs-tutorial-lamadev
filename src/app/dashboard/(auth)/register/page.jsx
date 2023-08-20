"use client";
// REACT HOOKS
import { useState } from "react";
// NEXTJS HOOKS
import Link from "next/link";
import { useRouter } from "next/navigation";
// STYLES
import styles from "./page.module.css";

const Register = () => {
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleForm = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      res.status === 201 &&
        router.push("/dashboard/login?success=Account has been created");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Your name..."
          className={styles.input}
          required
        />
        <input
          type="email"
          placeholder="Your email..."
          className={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Your password..."
          className={styles.input}
          required
        />
        <button className={styles.button}>Register</button>
        {error && <div>Something went wrong!</div>}
        <Link className={styles.link} href="/dashboard/login">
          Login with an existing account
        </Link>
      </form>
    </div>
  );
};

export default Register;
