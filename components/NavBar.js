import React from "react";
import NavBarLink from "./NavBarLink";

function NavBar() {
  return (
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <NavBarLink>FAQ</NavBarLink>
      <NavBarLink>About</NavBarLink>
    </nav>
  );
}

export default NavBar;
