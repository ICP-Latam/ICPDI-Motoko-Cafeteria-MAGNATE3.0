import React from "react";
import { Container } from "reactstrap";
import cafeteriaImage from "./imagenes/CAFETERIA.png"; // Ajusta la ruta según la ubicación real de la imagen
import otraImagen from "./imagenes/fondo.png"; // Ruta de la nueva imagen

function Home() {
  return (
    <div className="page-header header-filter" style={{ backgroundImage: `url(${otraImagen})`, backgroundSize: "cover", backgroundPosition: "center", color: "#000000" }}>
      <Container>
        <div className="content-center brand" style={{ textAlign: "center" }}>
          <h1 className="h1-seo">Cafetería Magnate 3.0</h1>
          <p className="lead" style={{ color: "#ffffff" }}>
            Bienvenido a nuestra cafetería, donde cada sorbo cuenta.
          </p>
          <img
            src={cafeteriaImage}
            alt="Cafetería"
            style={{ maxWidth: "80%", marginTop: "20px", borderRadius: "8px" }}
          />
          <p className="lead" style={{ color: "#ffffff" }}>
            Descubre una experiencia única de café y deliciosos productos.
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Home;