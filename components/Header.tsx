import React from "react";
import Link from "next/link";
import Style from "../styles/Header.module.scss";
type Props = {};

const Header = (props: Props) => {
  return (
    <nav className={Style.nav}>
      <div className={Style.logo}>
        <h1>
          <i className="fas fa-infinity"></i>
        </h1>
      </div>
      <div className={Style.navItems}>
        <Link href="/">Home</Link>
        <Link href="/">Portfolio</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
      </div>
    </nav>
  );
};
export default Header;
