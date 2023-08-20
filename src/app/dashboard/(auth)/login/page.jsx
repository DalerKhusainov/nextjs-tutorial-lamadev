"use client";
// REACT HOOKS
import { useState } from "react";
// NEXTJS HOOKS
import Link from "next/link";
import { useRouter } from "next/navigation";
// NEXT AUTH HOOKS
import { signIn, useSession } from "next-auth/react";
// STYLES
import styles from "./page.module.css";

const Login = () => {
  const [error, setError] = useState(false);
  const session = useSession();
  const router = useRouter();

  // FORM HANDLER
  const handleForm = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", { email, password });
  };

  if (session.status === "loading") {
    return <div>Loading...</div>;
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleForm}>
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
        <button className={styles.button}>Login</button>
        {error && <div>Something went wrong!</div>}
        <Link className={styles.link} href="/dashboard/login">
          Login with an existing account
        </Link>
      </form>
      <button onClick={() => signIn("google")}>Login with Google</button>
    </div>
  );
};

export default Login;
