import { NavLink } from "react-router-dom";

function Lugares() {
  const lugares = [
    {
      id: "monserrate",
      nombre: "Monserrate",
      ciudad: "Bogotá",
      emoji: "🏔️",
      descripcion: "Un lugar emblemático de Bogotá."
    },
    {
      id: "cartagena",
      nombre: "Cartagena",
      ciudad: "Bolívar",
      emoji: "🏝️",
      descripcion: "Una hermosa ciudad histórica."
    },
    {
      id: "san-andres",
      nombre: "San Andrés",
      ciudad: "Caribe",
      emoji: "🌊",
      descripcion: "Playas y mar de siete colores."
    }
  ];

  return (
    <div>

      <h1>Explorar</h1>

      <p className="subtitulo">
        Descubre todo lo que Colombia tiene para ofrecer.
      </p>

      {/* TABS */}

      <div className="tabs">

        <NavLink
          to="/lugares"
          className={({ isActive }) =>
            isActive ? "tab active" : "tab"
          }
        >
          📍 Lugares
        </NavLink>

        <NavLink
          to="/comida"
          className={({ isActive }) =>
            isActive ? "tab active" : "tab"
          }
        >
          🍴 Comida
        </NavLink>

        <NavLink
          to="/actividades"
          className={({ isActive }) =>
            isActive ? "tab active" : "tab"
          }
        >
          🎯 Actividades
        </NavLink>

      </div>

      {/* CARDS */}

      <div className="cards">

        {lugares.map((lugar) => (

          <div className="card" key={lugar.id}>

            <div className="card-image">
              {lugar.emoji}
            </div>

            <div className="card-content">

              <h2>{lugar.nombre}</h2>

              <p className="ciudad">
                📍 {lugar.ciudad}
              </p>

              <p>
                {lugar.descripcion}
              </p>

              <NavLink
                to={`/detalle/${lugar.id}`}
                className="boton"
              >
                Ver detalles →
              </NavLink>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}