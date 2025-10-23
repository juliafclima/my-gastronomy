import { LuShoppingCart, LuUser } from "react-icons/lu";

import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <div className={styles.items}>
        <img src="/logo.png" alt="Logo do site" className={styles.logo} />

        <div className={styles.linkContainer}>
          <a href="" className={`${styles.link} ${styles.linkText}`}>
            Home
          </a>

          <a href="" className={`${styles.link} ${styles.linkText}`}>
            Plates
          </a>

          <LuShoppingCart className={styles.link} />

          <LuUser className={styles.link} />
        </div>
      </div>
    </nav>
  );
}
