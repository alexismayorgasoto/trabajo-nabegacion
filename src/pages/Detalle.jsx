import { useNavigate, useParams } from "react-router-dom";

function Detalle() {

  const { id } = useParams();

  const navigate = useNavigate();

  const lugares = {
    monserrate: {
      nombre: "Monserrate",
      emoji: "🏔️",
      ciudad: "Bogotá, Colombia",
      descripcion:
        "Monserrate es uno de los lugares más importantes de Bogotá. Desde su cima se puede observar gran parte de la ciudad."
    },

    cartagena: {
      nombre: "Cartagena",
      emoji: "🏝️",
      ciudad: "Bolívar, Colombia",
      descripcion:
        "Cartagena es una ciudad histórica conocida por sus playas, arquitectura colonial y hermosos paisajes."
    },

    "san-andres": {
      nombre: "San Andrés",
      emoji: "🌊",
      ciudad: "Caribe colombiano",
      descripcion:
        "San Andrés es una isla famosa por sus playas y por su impresionante mar de siete colores."
    }
  };

  const lugar = lugares[id];

  if (!lugar) {
    return (
      <div>
        <h1>Lugar no encontrado</h1>

        <button
          className="boton"
          onClick={() => navigate(-1)}
        >
          ← Regresar
        </button>
      </div>
    );
  }

  return (
    <div>

      <button
        className="volver"
        onClick={() => navigate(-1)}
      >
        ← Regresar
      </button>

      <div className="detalle">

        <div className="detalle-emoji">
          {lugar.emoji}
        </div>

        <h1>{lugar.nombre}</h1>

        <h3>📍 {lugar.ciudad}</h3>

        <p>
          {lugar.descripcion}
        </p>

        <button
          className="boton"
          onClick={() => navigate("/favoritos")}
        >
          ❤️ Agregar a favoritos
        </button>

      </div>

    </div>
  );
}