import React from "react";
import { Container } from "reactstrap";
import cafeteriaImage from "./images/cafeteria.jpg"; // Ajusta la ruta según la ubicación real de la imagen

function Home() {
  return (
    <div className="page-header header-filter">
      <Container>
        <div className="content-center brand" style={{ textAlign: "center" }}>
          <h1 className="h1-seo">Cafeteria Magnate 3.0</h1>
          <h3 className="d-none d-sm-block">
            Una plataforma que brinda a las personas un servicio de café así como servicio de comida y diferentes productos y por cada producto que adquiera dentro de esta cafetería.
          </h3>

          {/* Agregar la imagen */}
          <img
            src={cafeteriaImage}
            alt="Cafeteria"
            style={{ maxWidth: "100%", marginTop: "20px" }}
          />
        </div>
      </Container>
    </div>
  );
}

export default Home;
