import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../photo/logo.png";

const Header = () => {
  const [nav, setNav] = useState(false);

  return (
    <header className="header" id="header">
      <div className="header__inner">
        <div className="container header__container">
          <a href="#" className="logo">
            <img src={logo} alt="" className="logo__img" />
          </a>
          <ul className={nav ? "menu__list active" : "menu__list"}>
            <li className="menu__item">
              <a href="#header">Головна</a>
            </li>
            <li className="menu__item">
              <a href="#physical">Для фізичних осіб</a>
            </li>
            <li className="menu__item">
              <a href="#law">Для юридичних осіб</a>
            </li>
            <li className="menu__item">
              <a href="#footer">Контакти</a>
            </li>
          </ul>
          <div onClick={() => setNav(!nav)} className="burger-btn">
            {nav ? <AiOutlineClose size={35} /> : <AiOutlineMenu size={35} />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
