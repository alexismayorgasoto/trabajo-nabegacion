import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      <div className="hero">

        <span className="emoji">🇨🇴</span>

        <h1>Explora Colombia</h1>

        <p>
          Descubre los lugares, sabores y actividades
          más increíbles de Colombia.
        </p>

        <Link to="/lugares" className="boton">
          Comenzar a explorar →
        </Link>

      </div>

      <div className="info">

        <div className="info-card">
          <span>📍</span>
          <h3>Lugares</h3>
          <p>Conoce destinos increíbles.</p>
        </div>

        <div className="info-card">
          <span>🍴</span>
          <h3>Comida</h3>
          <p>Descubre nuestra gastronomía.</p>
        </div>

        <div className="info-card">
          <span>🎯</span>
          <h3>Actividades</h3>
          <p>Encuentra nuevas experiencias.</p>
        </div>

      </div>

    </div>
  );
}