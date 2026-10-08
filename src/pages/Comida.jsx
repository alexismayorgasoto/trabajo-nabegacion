import { NavLink } from "react-router-dom";

function Comida() {
  const comidas = [
    {
      nombre: "Bandeja Paisa",
      emoji: "🍛",
      descripcion: "Plato tradicional de Antioquia."
    },
    {
      nombre: "Ajiaco",
      emoji: "🍲",
      descripcion: "Sopa tradicional de Bogotá."
    },
    {
      nombre: "Arepa",
      emoji: "🫓",
      descripcion: "Uno de los alimentos más representativos."
    }
  ];

  return (
    <div>

      <h1>Explorar</h1>

      <p className="subtitulo">
        Conoce los sabores de Colombia.
      </p>

      {/* TABS */}

      <div className="tabs">

        <NavLink to="/lugares" className="tab">
          📍 Lugares
        </NavLink>

        <NavLink
          to="/comida"
          className="tab active"
        >
          🍴 Comida
        </NavLink>

        <NavLink
          to="/actividades"
          className="tab"
        >
          🎯 Actividades
        </NavLink>

      </div>

      <div className="cards">

        {comidas.map((comida) => (

          <div className="card" key={comida.nombre}>

            <div className="card-image">
              {comida.emoji}
            </div>

            <div className="card-content">

              <h2>{comida.nombre}</h2>

              <p>{comida.descripcion}</p>

              <button className="boton">
                Ver más
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}
