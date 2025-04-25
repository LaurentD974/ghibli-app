import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Studio Ghibli Films</h1>
      <ul>
        <li>
          <Link to="/HomePage">Accueil</Link>
        </li>
        <li>
          <Link to="/pages/FavoritePage">Favoris</Link>
        </li>
        {/* <li>
          <Link to="/about">À propos</Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
