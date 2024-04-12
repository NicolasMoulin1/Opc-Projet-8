import "../assets/fonts/Montserrat/OFL.txt";
import logoKasa from "../assets/images/LogoKasa.png";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <img src={logoKasa} alt="" />
      <nav>
        <ul>
          <NavLink to="/" className={({ isActive }) => (isActive ? "underline" : "")}>
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "underline" : "")}>
            <li>À Propos</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
