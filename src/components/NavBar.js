import React from "react";

function NavBar() {
  console.log("NavBar");

  return <nav>{
    <div>
      <a href="#home">home</a>
      <a href="#about">about</a>
      <a href="#projects">projects</a>
    </div>
  }</nav>;
}

export default NavBar;
