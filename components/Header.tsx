import Link from "next/link";
import React from "react";

const navbar = [
  {
    navlink: "/home",
    navtext: "Home",
  },
  {
    navlink: "/about",
    navtext: "About",
  },
  {
    navlink: "/contact",
    navtext: "Contact",
  },
];

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="flex gap-4">
          {navbar.map((item) => {
            return (
              <li key={item.navtext}>
                <Link href={item.navlink}>{item.navtext}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
