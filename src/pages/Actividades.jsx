import { NavLink } from "react-router-dom";

function Actividade() {
  const actividades = [
    {
      nombre: "Senderismo",
      emoji: "🥾",
      descripcion: "Explora los paisajes naturales de Colombia."
    },
    {
      nombre: "Buceo",
      emoji: "🤿",
      descripcion: "Descubre la vida marina del Caribe."
    },
    {
      nombre: "Ciclismo",
      emoji: "🚴",
      descripcion: "Recorre las montañas de Colombia."
    }
  ];

  return (
    <div>
      <h1>Explorar</h1>

      <p className="subtitulo">
        Encuentra actividades para disfrutar.
      </p>

      <div className="tabs">

        <NavLink to="/lugares" className="tab">
          📍 Lugares
        </NavLink>

        <NavLink to="/comida" className="tab">
          🍴 Comida
        </NavLink>

        <NavLink
          to="/actividades"
          className="tab active"
        >
          🎯 Actividades
        </NavLink>

      </div>

      <div className="cards">

        {actividades.map((actividad) => (
          <div className="card" key={actividad.nombre}>

            <div className="card-image">
              {actividad.emoji}
            </div>

            <div className="card-content">

              <h2>{actividad.nombre}</h2>

              <p>{actividad.descripcion}</p>

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