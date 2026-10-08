import { NavLink } from "react-router-dom";

function Drawer() {
  return (
    <aside className="drawer">

      <div className="logo">
        🇨🇴
        <h2>Explora Colombia</h2>
      </div>

      <nav>

        <NavLink to="/">
          🏠 Inicio
        </NavLink>

        <NavLink to="/lugares">
          📍 Lugares
        </NavLink>

        <NavLink to="/comida">
          🍴 Comida
        </NavLink>

        <NavLink to="/actividades">
          🎯 Actividades
        </NavLink>

        <NavLink to="/favoritos">
          ❤️ Favoritos
        </NavLink>

      </nav>

      <div className="drawer-footer">
        <p>🌎 Descubre Colombia</p>
      </div>

    </aside>
  );
}
