import { useState } from "react";
import "./Nav.css";
import {
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { Link } from 'react-router-dom'

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav>
      <div className="section-one">
        <img src="/media/ev-logo.webp" alt="logo" />
      </div>
      <div className="section-two" role="button" onClick={handleMenu}>
        <AiOutlineMenu />
        <h2>Menu</h2>
      </div>
      <div className={menuOpen ? "menu open" : "menu"}>
        <div className="menu-header" >
          <h2>Menu</h2>
          <AiOutlineClose id="close-menu" onClick={handleMenu} />
        </div>
        <div className="menu-items" >
          <Link><h3>Get Active With Us</h3></Link>
          <Link><h3>Find A Gym Near You</h3></Link>
          <Link><h3>Evolv Fitness App</h3></Link>
          <Link><p>Gym Membership Options</p></Link>
          <Link><p>How busy is my gym</p></Link>
          <Link><p>Classes</p></Link>
          <Link><p>Equipment</p></Link>
          <Link><p>About Us</p></Link>
          <Link><p>Help & Contact</p></Link>
          <Link><p>Careers at Evolv Fitness</p></Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
