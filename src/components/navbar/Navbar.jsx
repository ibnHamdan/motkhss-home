import './Navbar.scss';
import Wrapper from '../wrapper/Wrapper';
//import { FaBars } from 'react-icon';
import { useState } from 'react';
import motkhsss from '../../assets/motkhss.svg';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="navbar">
      <Wrapper className="navbar__container">
        <a
          href="@"
          className="navbar__logo"
          onClick={() => setShowNav(false)}
        >
          <img src={motkhsss} alt="" />
        </a>

        <ul className={`navbar__links ${showNav ? 'show-nav' : ''}`}>
          <li onClick={() => setShowNav(false)}>
            <a href="#">Home</a>
          </li>
          <li onClick={() => setShowNav(false)}>
            <a href="#">About</a>
          </li>
          <li onClick={() => setShowNav(false)}>
            <a href="#">Pricing</a>
          </li>
          <li onClick={() => setShowNav(false)}>
            <a href="#">Blog</a>
          </li>
        </ul>

        <a href="" className="button-primary navbar__btn">
          Sign UP
        </a>
        <div
          className={`navbar__menubar ${showNav ? 'bg-color' : ''}`}
          onClick={() => setShowNav(!showNav)}
        >
          <FaBars />
        </div>
      </Wrapper>
    </nav>
  );
};

export default Navbar;
