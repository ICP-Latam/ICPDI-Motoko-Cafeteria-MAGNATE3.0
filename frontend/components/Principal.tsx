import React from "react";


// reactstrap components
import { Container } from "reactstrap";
//import Slider from "../Slider/Slider";

function Home() {

  return (
    <div className="page-header header-filter" >
      <Container >
        <div className="content-center brand" style={{textAlign:'center'}}>
          <h1 className="h1-seo">Cafeteria Magnate 3.0</h1>
          <h3 className="d-none d-sm-block">
            Una plataforma que brinda a las personas un servicio de café así como 
            servicio de comida y diferentes productos y por cada producto que adquiera 
            dentro de esta cafetería.
          </h3>
        </div>
        
      </Container>
      
      
      
    </div>
  );
}

export default Home;