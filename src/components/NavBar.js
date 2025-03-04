import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const link = links.map((link) => {
    return (
      <a href={"#" + link} key={link}>
        {link}
      </a>
    )
  });

  /* display an <a> tag for each link here */
  return <nav>{link}</nav>;
}

export default NavBar;
