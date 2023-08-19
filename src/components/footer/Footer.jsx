// NEXTJS HOOKS
import Image from "next/image";
// STYLES
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div>&copy;2023 Lamania. All rights reseved.</div>
      <div className={styles.social}>
        {/* WE CAN APPLY WIDTH AND HEIGHT TO A IMAGE BY USING DIV AND WE SHOULD APPLY TO THE IMAGE HOOK A FILL ATTRIBUTE */}
        {/* <div className={styles.imgContainer}>
          <Image src="/1.png" fill={true} alt="" />
        </div> */}
        <Image
          src="/1.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Facebook logo"
        />
        <Image
          src="/2.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Instagramm logo"
        />
        <Image
          src="/3.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Twitter logo"
        />
        <Image
          src="/4.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Youtube logo"
        />
      </div>
    </footer>
  );
};

export default Footer;
