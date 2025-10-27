import { useState } from "react";
import { Link } from "react-router-dom";
import { LuMenu, LuShoppingCart, LuUser } from "react-icons/lu";
import { IoRestaurantOutline } from "react-icons/io5";
import { BiHomeAlt2 } from "react-icons/bi";
import { Drawer } from "@mui/material";

import styles from "./navbar.module.css";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => setOpenMenu(!openMenu);

  return (
    <nav className={styles.container}>
      <div className={styles.items}>
        <Link to={"/"}>
          <img src="/logo.png" alt="Logo do site" className={styles.logo} />
        </Link>

        <div className={styles.linkContainer}>
          <Link to="/" className={`${styles.link} ${styles.desktopOnly}`}>
            Home
          </Link>

          <Link to="/plates" className={`${styles.link} ${styles.desktopOnly}`}>
            Plates
          </Link>

          <Link to="/cart">
            <LuShoppingCart
              className={`${styles.link} ${styles.desktopOnly}`}
            />
          </Link>

          <Link to="/profile">
            <LuUser className={styles.link} />
          </Link>

          <LuMenu
            className={`${styles.link} ${styles.hideOnWeb}`}
            onClick={handleOpenMenu}
          />
        </div>

        <Drawer anchor="right" open={openMenu} onClose={handleOpenMenu}>
          <div className={styles.drawer}>
            <Link to="/" className={styles.link}>
              <BiHomeAlt2 /> Home
            </Link>
            <Link to="/plates" className={styles.link}>
              <IoRestaurantOutline /> Plates
            </Link>
            <Link to="/profile" className={styles.link}>
              <LuUser /> Profile
            </Link>
          </div>
        </Drawer>
      </div>
    </nav>
  );
}
