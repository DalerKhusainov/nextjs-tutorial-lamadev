// STYLES
import styles from "./page.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <h2 className={styles.mainTitle}>Our Works</h2>
      {children}
    </div>
  );
};

export default Layout;
