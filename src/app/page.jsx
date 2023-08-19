// NEXTJS HOOKS
import Image from "next/image";
// STYLES
import styles from "./page.module.css";
// FROM PUBLIC FOLDER
import Hero from "public/hero.png";
// COMPONENTS
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.description}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url="/portfolio" text="See Our Works" />
      </div>
      <div className={styles.item}>
        <Image
          src={Hero}
          alt="Hero section ilustrator image"
          className={styles.img}
        />
      </div>
    </div>
  );
}
