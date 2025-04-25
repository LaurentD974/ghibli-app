import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav>
      <NavLink to="/" end>
        HomePage
      </NavLink>
      <NavLink to="pages/FavoritePage" end>
        Favoris
      </NavLink>
    </nav>
  );
}

export default Navbar;